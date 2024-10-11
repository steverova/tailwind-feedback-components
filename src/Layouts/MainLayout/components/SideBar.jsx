import { XIcon, LayoutDashboardIcon, PuzzleIcon } from 'lucide-react'
import NavItem from './NavItem'

const sidebarItems = [
	{
		label: 'Dashboard',
		icon: <LayoutDashboardIcon />,
		route: '/'
	},
	{
		label: 'Alert Dialog',
		icon: <PuzzleIcon />,
		route: '/alert-dialog'
	},
	{
		label: 'Notification',
		icon: <PuzzleIcon />,
		route: '/notification'
	},
	{
		label: 'Modal',
		icon: <PuzzleIcon />,
		route: '/modal'
	},
	{
		label: 'Wrapper Context',
		icon: <PuzzleIcon />,
		route: '/wrapper-context'
	}
]

const Sidebar = ({ isOpen, setShowSidebar }) => (
	<div
		className={`fixed top-0 left-0 h-full bg-emerald-500 text-white p-4 transition-transform duration-300 ease-in-out transform z-50 shadow-lg ${
			isOpen ? 'translate-x-0' : '-translate-x-full'
		} md:translate-x-0 md:relative md:w-64 w-3/4`}>
		<div>
			<div className='relative flex items-center justify-center h-12 bg-emerald-600 rounded-lg'>
				<span className='text-white font-bold uppercase'>My Sidebar</span>

				<div className='absolute right-4'>
					<button
						onClick={() => setShowSidebar(false)}
						type='button'
						className=' flex items-center text-white hover:text-gray-300 focus:outline-none focus:text-gray-300'>
						<XIcon className='h-6 w-6' />
					</button>
				</div>
			</div>

			<div className='flex flex-col flex-1 overflow-y-auto'>
				<nav className='flex-1 px-2 py-4'>
					{sidebarItems.map((item) => (
						<NavItem
							key={item.label}
							title={item.label}
							icon={item.icon}
							route={item.route}
						/>
					))}
				</nav>
			</div>
		</div>
	</div>
)

export default Sidebar
