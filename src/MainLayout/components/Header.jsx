const Header = ({ children }) => (
	<div className='flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-sm'>
		<div className='flex items-center px-4'>{children}</div>
	</div>
)

export default Header
