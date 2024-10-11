import FlatRadioButton from '../components/FlatRadioButton.jsx'
import { types, positionClasses } from '../components/helper'
import { useNotification } from '../components/Notification/useNotification'
import notifySvg from '../assets/svg/notify.svg'
import PopoverButton from '../components/PopverButton.jsx'

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

	return (
		<div className=' flex min-h-screen bg-green-100'>

			<nav className='hidden lg:block w-32 fixed  mt-12 '>
				<h2 className='text-md font-bold text-right text-gray-600  px-3 border-r-2 border-gray-300'>
					Navigation
				</h2>
				<ul className='p-0'>
					{['install', 'usage', 'props', 'methods'].map((item) => (
						<li key={item}>
							<a
								href={`#${item}`}
								className='border-r-2 border-gray-300 block text-right leading-6 text-sm font-medium px-3 hover:text-emerald-600 text-gray-600 hover:border-r-2 hover:border-emerald-600  '>
								{item}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Contenido principal */}
			<div className='flex-1 sm:ml-32 overflow-y-auto p-6'>
				<div className='sm:block md:hidden'>
					<div className='fixed top-15 right-10 z-10  '>
						<PopoverButton title='Navigation'>
							<ul className='p-0'>
								{['install', 'usage', 'props', 'methods'].map((item) => (
									<li key={item}>
										<a
											href={`#${item}`}
											className='border-r-2 border-gray-300 block text-right leading-6 text-sm font-medium px-3 hover:text-emerald-600 text-gray-600 hover:border-r-2 hover:border-emerald-600  '>
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
						<h1 className='text-5xl font-bold text-gray-800 mb-4 '>
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
						Click on any button to trigger different notifications
					</p>

					<div className='flex flex-row flex-wrap gap-3 justify-center my-6 '>
						{Object.entries(positionClasses).map(([key, value]) => (
							<FlatRadioButton
								key={value}
								name={value}
								label={key}
								variant='regular'
							/>
						))}
					</div>

					<div className='flex flex-row flex-wrap gap-3 justify-center my-6 '>
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
								onClick={() => handleNotification(type.label.toLowerCase())}>
								{type.label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotificationPage
