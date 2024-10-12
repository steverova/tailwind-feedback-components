import { MenuIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import { Outlet } from 'react-router-dom'

function MainLayout({ children }) {
	const [showSidebar, setShowSidebar] = useState(false)

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	// Función para cerrar sidebar en pantallas más grandes que 'sm'
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 640) {
				setShowSidebar(false)
			}
		}

		// Cerrar sidebar al hacer clic fuera
		const handleClickOutside = (event) => {
			if (!document.getElementById('sidebar').contains(event.target)) {
				setShowSidebar(false)
			}
		}

		window.addEventListener('resize', handleResize)
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			window.removeEventListener('resize', handleResize)
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className='flex h-screen bg-gray-100'>
			{/* Sidebar */}
			<div id='sidebar'>
				<Sidebar
					isOpen={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
			</div>

			{/* Main content */}
			<div className='flex flex-col flex-1 overflow-y-auto'>
				{/* Header */}
				<div className='relative'>
					<button
						type='button'
						onClick={toggleSidebar}
						className='fixed top-4 left-4 p-2 flex items-center justify-center text-white *:text-emerald-500 focus:outline-none focus:text-emerald-700 '>
						<MenuIcon className='w-6 h-6' />
					</button>
				</div>

				{/* Header */}
				<Header toggleSidebar={toggleSidebar} />

				{/* Main content area */}
				<div className='main-layout h-screen overflow-y-auto'>
					{children}
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default MainLayout
