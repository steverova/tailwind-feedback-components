import { useNavigate } from 'react-router-dom'

const NavItem = ({ title, icon, route }) => {
	const navigate = useNavigate()

	return (
		<button
			onClick={() => navigate(route)}
			type='button'
			href='#'
			className='flex items-center px-4 py-2 gap-3 text-white hover:bg-emerald-700 rounded-lg transition'>
			{icon}
			{title}
		</button>
	)
}

export default NavItem
