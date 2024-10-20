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

	const handleScroll = () => {
		const sections = document.querySelectorAll('section')
		const navLinks = document.querySelectorAll('ul li a')

		window.onscroll = () => {
			for (const section of sections) {

				console.log('section ->', section)

				const top = window.scrollY
				const offset = section.offsetTop - 100
				const height = section.offsetHeight
				const id = section.getAttribute('id')

				if (top >= offset && top < offset + height) {
					for (const navLink of document.querySelectorAll('ul li a')) {
						navLink.classList.remove('text-emerald-600')
						navLink.classList.remove('border-emerald-600')
						if (navLink.getAttribute('href').slice(1) === id) {
							navLink.classList.add('text-emerald-600')
							navLink.classList.add('border-emerald-600')
						}
					}
				}
			}
		}

		console.log('navLinks ->', navLinks)
	}

	useEffect(() => {
		handleScroll()
	}, [])

	// useEffect(() => {
	// 	const targets = sectionIds
	// 		.map((id) => document.getElementById(id))
	// 		.filter(Boolean)

	// 	const callback = (entries) => {
	// 		for (const entry of entries) {
	// 			if (entry.isIntersecting) {
	// 				setActiveItem(entry.target.id)
	// 			}
	// 		}
	// 	}

	// 	const observer = new IntersectionObserver(callback, {
	// 		threshold: 0.5
	// 	})

	// 	for (const target of targets) {
	// 		observer.observe(target)
	// 	}

	// 	return () => {
	// 		for (const target of targets) {
	// 			observer.unobserve(target)
	// 		}
	// 	}
	// }, [])

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
