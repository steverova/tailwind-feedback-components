import { useState } from 'react'
import { House, Menu, Pointer, BookOpen, Wrench, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const style = 'text-emerald-500 group-hover:text-white'
const size = 20

const MenuItem = ({ icon, name, path }) => (
	<div
		key={name}
		className='bg-emerald-50 group hover:bg-emerald-400  rounded-[24px] p-2 '>
		<a
			href={path}
			type='button'
			className='flex flex-col  items-center px-3 group'>
			{icon}
			<small className='text-emerald-600 font-semibold group-hover:text-white'>
				{name}
			</small>
		</a>
	</div>
)

const FloatMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)
	const navigate = useNavigate()

	const navigation = [
		{
			name: 'Menu',

			icon: (
				<Menu
					size={size}
					className={style}
				/>
			)
		},
		{
			name: 'Demo',
			path: '/pages/notification#demo',
			icon: (
				<Pointer
					size={size}
					className={style}
				/>
			)
		},
		{
			name: 'Usage',
			path: '/pages/notification#usage',
			icon: (
				<Wrench
					size={size}
					className={style}
				/>
			)
		},
		{
			name: 'Documentation',
			path: '/pages/notification#documentation',
			icon: (
				<BookOpen
					size={size}
					className={style}
				/>
			)
		}
	]

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const handleMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<div className=' w-full  justify-center items-center overscroll-x-auto scroll-smooth bg-orange-200'>
				<div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 overscroll-x-auto'>
					{openMenu && (
						<div className='flex w-full gap-2 bg-white text-white p-2 rounded-[28px] shadow-lg border-2 border-emerald-300 mb-3  overscroll-x-auto  '>
							<div className='flex flex-row  overflow-x-auto'>
								<MenuItem
									key='Home'
									name='Home'
									path='/'
									icon={
										<House
											size={size}
											className={style}
										/>
									}
								/>

								<div className='h-10 w-[2px] bg-emerald-300 mx-auto my-2 ' />

								{navigation.map((item) => (
									<MenuItem
										path={item.path}
										key={item.name}
										name={item.name}
										icon={item.icon}
									/>
								))}
							</div>
						</div>
					)}

					<div className='flex w-full  justify-center '>
						<button
							style={{
								border: ''
							}}
							onClick={handleMenu}
							type='button'
							className='bg-emerald-50 shadow-lg  rounded-tl-[28px] rounded-tr-[28px] flex justify-center  w-44  group hover:bg-emerald-400 border-2 border-emerald-300 '>
							<ChevronUp
								className={`text-emerald-600 group-hover:text-white ${openMenu ? 'rotate-180' : 'animate-bounce'} `}
							/>
						</button>
					</div>
				</div>

				{isOpen && (
					<div className='fixed bottom-28  left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-xl  p-2 transition-transform duration-300 ease-in-out transform translate-y-0 flex'>
						{[
							'Button',
							'Alert Dialog',
							'Notification',
							'Modal',
							'Wrapper Context'
						].map((item) => (
							<button
								key={item}
								type='button'
								className='block w-full text-left text-emerald-500 hover:text-white hover:bg-emerald-500 p-2 rounded-lg'>
								{item}
							</button>
						))}
					</div>
				)}
			</div>
			<Outlet />
		</>
	)
}

export default FloatMenu
