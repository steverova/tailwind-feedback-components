import { useMethodsContext } from '../WrapperContext/WrapperContext'

const NavList = ({ sectionIds }) => {
	const { methods } = useMethodsContext()
	const { activeItem, alignment, handleNavClick } = methods

	console.log('activeItem ->', activeItem)

	return (
		<ul className='p-0'>
			{sectionIds.map((item) => (
				<li key={item}>
					<a
						href={`#${item}`}
						onClick={() => handleNavClick(item)}>
						{item}
					</a>
				</li>
			))}
		</ul>
	)
}

export default NavList
