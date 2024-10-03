import './App.css'
import { useAlertDialog } from './components/AlertDialog/useAlertDialog'
import { useNotification } from './components/Notification/useNotification'

function App() {
	const { alertDialogHandler } = useAlertDialog()
	const { notificationHandler } = useNotification()

	const handleClick = async () => {
		const result = await alertDialogHandler({
			title: 'Confirm Action',
			message: 'Are you sure you want to proceed?',
			type: 'success'
		})

		if (!result) return 

		await notificationHandler({
			title: 'Notification',
			message: 'This is a notification',
			type: 'success',
			autoHide: 6000
		})
	}

	const handleNotification = async () => {
		await notificationHandler({
			title: 'Notification',
			message: 'This is a notification',
			type: 'error',
			autoHide: 6000
		})
	}

	return (
		<div className=' flex flex-row gap-3 items-center justify-center'>
			<button
				className='bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-400 font-semibold'
				type='button'
				onClick={handleClick}>
				Open Dialog
			</button>

			<button
				className='bg-green-200 px-4 py-2 rounded-lg hover:bg-green-400 font-semibold'
				type='button'
				onClick={handleNotification}>
				Open Notification
			</button>
		</div>
	)
}

export default App
