const NavItem = ({ title, iconPath }) => (
	<a
		href='#'
		className='flex items-center px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6 mr-2'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d={iconPath}
			/>
		</svg>
		{title}
	</a>
)

export default NavItem