import { useMethodsContext } from '../WrapperContext/WrapperContext'

const NavList = ({ sectionIds }) => {
	const { methods } = useMethodsContext()
	const { activeItem, alignment, handleNavClick } = methods

	return (
		<ul className='p-0'>
			{sectionIds.map((item) => (
				<li key={item}>
					<a
						href={`#${item}`}
						onClick={() => handleNavClick(item)}
						className={`${alignment ? 'border-r-2' : 'border-l-2'}  block text-${alignment} leading-6 text-sm font-medium px-3 transition-all duration-300 ${
							activeItem === item
								? 'text-emerald-600 border-emerald-600'
								: 'text-gray-400 border-gray-300 hover:border-emerald-500'
						}`}>
						{item}
					</a>
				</li>
			))}
		</ul>
	)
}

export default NavList
