import { useState } from 'react'
import { House, Menu, Pointer, BookOpen, Wrench, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const style = 'text-emerald-500 group-hover:text-white'
const size = 20
const navigation = [
	{
		name: 'Menu',
		path: '/',
		icon: (
			<Menu
				size={size}
				className={style}
			/>
		)
	},
	{
		name: 'Demo',
		path: '/',
		icon: (
			<Pointer
				size={size}
				className={style}
			/>
		)
	},
	{
		name: 'Usage',
		path: '/',
		icon: (
			<Wrench
				size={size}
				className={style}
			/>
		)
	},
	{
		name: 'Documentation',
		path: '/',
		icon: (
			<BookOpen
				size={size}
				className={style}
			/>
		)
	}
]

const MenuItem = ({ icon, name, onClick }) => (
	<div
		key={name}
		className='bg-emerald-50 group hover:bg-emerald-400  rounded-[24px] p-2 '>
		<button
			onClick={onClick}
			type='button'
			className='flex flex-col  items-center px-3 group'>
			{icon}
			<small className='text-emerald-600 font-semibold group-hover:text-white'>
				{name}
			</small>
		</button>
	</div>
)

const FloatMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const handleMenu = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<div className=' flex w-full bg-emerald-300 justify-center items-center over '>
			<div className='fixed bottom-0 left-1/2 transform -translate-x-1/2'>
				{openMenu && (
					<div className='flex gap-2 bg-white text-white p-2 rounded-[28px] shadow-lg border-2 border-emerald-300 mb-3 w-full overscroll-x-auto'>
						<MenuItem
							key='Home'
							name='Home'
							icon={
								<House
									size={size}
									className={style}
								/>
							}
						/>

						<div className='h-10 w-[2px] bg-emerald-300 mx-auto my-2' />

						{navigation.map((item) => (
							<MenuItem
								onClick={toggleMenu}
								key={item.name}
								name={item.name}
								icon={item.icon}
							/>
						))}
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
	)
}

export default FloatMenu
