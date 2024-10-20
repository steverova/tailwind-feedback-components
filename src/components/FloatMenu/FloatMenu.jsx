import { useState } from 'react'
import { House, Menu, Pointer, BookOpen, Wrench, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const style = 'text-emerald-500 group-hover:text-white'
const size = 20

const MenuItem = ({ icon, name, path }) => (
	<div
		key={name}
		className='bg-emerald-50 group hover:bg-emerald-400 rounded-[18px] p-2'>
		<a
			href={path}
			type='button'
			className='flex flex-col items-center px-3 group'>
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
			<nav
				class='~pb-6/10 pointer-events-none fixed bottom-2 left-0 z-10 w-full pt-12 '
				id='nav'>
				<div class='bg-mask-white dark:bg-mask-zinc-950 absolute bottom-0 left-0 right-0 h-[13rem] w-full ' />
				<div class=' flex justify-center'>
					<div class='max-w-full rounded-[1.375rem] bg-emerald-100/90 ring ring-emerald/[5%] backdrop-blur-xl backdrop-saturate-[140%] dark:border dark:border-white/[8%] dark:bg-emerald-950/90 dark:ring-0'>
						<div class='scrollbar-none  pointer-events-auto overflow-x-auto scroll-smooth rounded-[inherit] p-1.5'>
							<div class='isolate grid grid-cols-[repeat(4,5.6875em)] gap-2 '>
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
					</div>
				</div>
			</nav>

			<Outlet />
		</>
	)
}

export default FloatMenu
