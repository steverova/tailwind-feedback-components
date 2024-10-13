import { useEffect, useState } from 'react'
import { useMethodsContext } from '../WrapperContext/WrapperContext'
import NavList from './NavList'

const Navigation = ({ sectionIds, alignment = 'right' }) => {
	const { methods, setMethods } = useMethodsContext()

	const [activeItem, setActiveItem] = useState(
		() => localStorage.getItem('activeNavItem') || 'demo'
	)

	const handleNavClick = (item) => {
		setActiveItem(item)
		localStorage.setItem('activeNavItem', item)
	}

	useEffect(() => {
		const targets = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean)

		const callback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setActiveItem(entry.target.id)
				}
			}
		}

		const observer = new IntersectionObserver(callback, {
			threshold: 0.5
		})

		for (const target of targets) {
			observer.observe(target)
		}

		return () => {
			for (const target of targets) {
				observer.unobserve(target)
			}
		}
	}, [])

	useEffect(() => {
		setMethods({
			...methods,
			sectionIds,
			activeItem,
			alignment,
			handleNavClick
		})
	}, [activeItem])

	return (
		<nav className='hidden lg:block w-32 fixed mt-12'>
			<h2
				className={`${alignment ? 'border-r-2' : 'border-l-2'}   text-md font-bold text-${alignment} text-gray-600 px-3   border-gray-300`}>
				Navigation
			</h2>
			<NavList
				sectionIds={sectionIds}
				activeItem={activeItem}
				alignment={alignment}
				handleNavClick={handleNavClick}
			/>
		</nav>
	)
}

export { Navigation, NavList }
