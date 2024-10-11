import { XIcon } from 'lucide-react'
import NavItem from './NavItem'

const Sidebar = ({ isOpen, setShowSidebar }) => (
	<div
		className={`fixed top-0 left-0 h-full bg-blue-500 text-white p-4 transition-transform duration-300 ease-in-out transform z-50 shadow-lg ${
			isOpen ? 'translate-x-0' : '-translate-x-full'
		} md:translate-x-0 md:relative md:w-64 w-3/4`}>
		<div>
			<div className='relative flex items-center justify-center h-12 bg-blue-600 rounded-lg'>
				<span className='text-white font-bold uppercase'>My Sidebar</span>

				<div className='absolute right-4'>
					<button
						onClick={() => setShowSidebar(false)}
						type='button'
						className='md:hidden flex items-center text-white hover:text-gray-300 focus:outline-none focus:text-gray-300'>
						<XIcon className='h-6 w-6' />
					</button>
				</div>
			</div>

			<div className='flex flex-col flex-1 overflow-y-auto'>
				<nav className='flex-1 px-2 py-4'>
					<NavItem
						title='Dashboard'
						iconPath='M4 6h16M4 12h16M4 18h16'
					/>
					<NavItem
						title='Messages'
						iconPath='M6 18L18 6M6 6l12 12'
					/>
					<NavItem
						title='Settings'
						iconPath='M13 10V3L4 14h7v7l9-11h-7z'
					/>
				</nav>
			</div>
		</div>
	</div>
)

export default Sidebar
