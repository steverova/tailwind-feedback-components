import FlatRadioButton from '../components/FlatRadioButton.jsx'
import { types, positionClasses } from '../components/helper'
import { useNotification } from '../components/Notification/useNotification'
import notifySvg from '../assets/svg/notify.svg'
import PopoverButton from '../components/PopverButton.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { useEffect, useState } from 'react'

const objectToArray = (values) => {
	return Object.entries(values).map(([key, value]) => {
		return {
			key,
			...value
		}
	})
}

const NotificationPage = () => {
	const { notificationHandler, closeNotification } = useNotification()

	// Estado para ítem activo de navegación
	const [activeItem, setActiveItem] = useState(
		() => localStorage.getItem('activeNavItem') || 'demo'
	)

	// Función para manejar clic en navegación
	const handleNavClick = (item) => {
		setActiveItem(item)
		localStorage.setItem('activeNavItem', item) // Guardar en localStorage
		document.getElementById(item).scrollIntoView({ behavior: 'smooth' })
	}

	// Monitorear el scroll y actualizar la sección activa
	useEffect(() => {
		const sections = document.querySelectorAll('section')

		console.log(sections)
		const handleScroll = () => {
			sections.forEach((section) => {
				const rect = section.getBoundingClientRect()
				if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
					const id = section.getAttribute('id')
					setActiveItem(id)
					localStorage.setItem('activeNavItem', id) // Actualizar localStorage
				}
			})
		}

		// Escuchar el evento de scroll
		window.addEventListener('scroll', handleScroll)

		// Limpiar el listener cuando el componente se desmonte
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleNotification = async (type) => {
		const notificationId = await notificationHandler(`${type} notification`, {
			type: type,
			variant: 'filled',
			behavior: 'autoHide'
		})

		setTimeout(() => {
			closeNotification(notificationId)
		}, 5000)

		console.log(notificationId)
	}

	const array = objectToArray(types)
	const route = new URL('/src/markdown/notification.md', import.meta.url).pathname

	return (
		<div className='flex min-h-screen bg-emerald-50'>
			<nav className='hidden lg:block w-32 fixed mt-12'>
				<h2 className='text-md font-bold text-right text-gray-600 px-3 border-r-2 border-gray-300'>
					Navigation
				</h2>
				<ul className='p-0'>
					{['demo', 'usage', 'props', 'documentation'].map((item) => (
						<li key={item}>
							<a
								href={`#${item}`}
								onClick={() => handleNavClick(item)} // Evento de clic
								className={`border-r-2 border-gray-300 block text-right leading-6 text-sm font-medium px-3 hover:text-emerald-600 ${
									activeItem === item
										? 'text-emerald-600 border-emerald-600'
										: 'text-gray-600'
								}`}
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Contenido principal */}
			<div className='static flex-1 sm:ml-32 overflow-y-auto'>
				<div className='sm:block md:hidden absolute top-15 left-0 right-0 bg-emerald-100 text-end z-50 me-12'>
					<div className='flex flex-row justify-end items-end content-end me-10 mt-1'>
						<PopoverButton title='Navigation'>
							<ul className='p-0'>
								{['demo', 'usage', 'props', 'documentation'].map((item) => (
									<li key={item}>
										<a
											href={`#${item}`}
											onClick={() => handleNavClick(item)} // Evento de clic
											className={`border-r-2 border-gray-300 block text-right leading-6 text-sm font-medium px-3 hover:text-emerald-600 ${
												activeItem === item
													? 'text-emerald-600 border-emerald-600'
													: 'text-gray-600'
											}`}
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</PopoverButton>
					</div>
				</div>

				<div className='py-16 text-center items-center'>
					{/* Título Hero */}
					<div className='flex justify-center items-baseline text-line'>
						<h1 className='text-5xl font-bold text-gray-800 mb-4'>
							Stay Notified{' '}
						</h1>
						<img
							className='h-16 md:hidden lg:block'
							src={notifySvg}
							alt='notify'
						/>
					</div>

					{/* Subtítulo */}
					<p className='text-xl text-gray-600 mb-8'>
						Click on any button to trigger different notifications.
					</p>

					<section className='py-12' id='demo'>
						<div className='flex flex-row flex-wrap gap-3 justify-center '>
							{Object.entries(positionClasses).map(([key, value]) => (
								<FlatRadioButton
									key={value}
									name={value}
									label={key}
									variant='regular'
								/>
							))}
						</div>

						<div className='flex flex-row flex-wrap gap-3 justify-center my-6'>
							{['filled', 'outlined', 'regular'].map((variant) => (
								<FlatRadioButton
									key={variant}
									name={variant}
									label={variant}
									variant={variant}
								/>
							))}
						</div>

						{/* Botones de notificaciones */}
						<div className='flex flex-row flex-wrap gap-4 justify-center'>
							{array.map((type) => (
								<button
									key={type.label}
									className={`px-6 py-3 rounded-lg ${type.color} ${type.hoverColor} font-semibold shadow-lg transform transition hover:scale-105`}
									type='button'
									onClick={() => handleNotification(type.label.toLowerCase())}
								>
									{type.label}
								</button>
							))}
						</div>
					</section>

					<section id='usage'>
						<MarkdownRenderer path={route} />
					</section>

					<section id='props'>
						{/* Contenido de props */}
					</section>

					<section id='documentation'>
						{/* Contenido de documentation */}
					</section>
				</div>
			</div>
		</div>
	)
}

export default NotificationPage
