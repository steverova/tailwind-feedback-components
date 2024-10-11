import FlatRadioButton from '../components/FlatRadioButton.jsx'
import { types, positionClasses } from '../components/helper'
import { useNotification } from '../components/Notification/useNotification'

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

	const positions = objectToArray(positionClasses)

	console.log(positions)

	const array = objectToArray(types)

	return (
		<div className='flex items-start justify-center min-h-full bg-green-100'>
			<div className='py-16 text-center'>
				{/* Título Hero */}
				<h1 className='text-5xl font-bold text-gray-800 mb-4'>
					Stay Notified!
				</h1>

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
	)
}
export default NotificationPage
