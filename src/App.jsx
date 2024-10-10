import { atomOneDark, CopyBlock, github, purebasic } from 'react-code-blocks'
import './App.css'
import { useAlertDialog } from './components/AlertDialog/useAlertDialog'
import { useNotification } from './components/Notification/useNotification'
import { types } from './components/helper'
import samples from './samples'

function App() {
	const { alertDialogHandler } = useAlertDialog()
	const { notificationHandler, closeNotification } = useNotification()

	const handleClick = async () => {
		const result = await alertDialogHandler({
			title: 'Confirm Action',
			message: 'Are you sure you want to proceed?',
			type: 'success'
		})

		if (!result) return

		await notificationHandler('nuevo props', {
			title: 'Notification',
			message: 'This is a notification',
			type: 'regular',
			autoHide: 6000
		})
	}

	const handleNotification = async (type) => {
		const notificationId = await notificationHandler('hey hello', {
			type: type,
			variant: 'regular',
			behavior: 'autoHide'
		})

		setTimeout(() => {
			closeNotification(notificationId)
		}, 5000)

		console.log(notificationId)
	}

	const array = Object.entries(types).map(([key, value]) => ({
		key,
		...value
	}))

	return (
		<>
			<div className=' flex flex-col gap-3 items-center justify-center'>
				<button
					className='bg-blue-200 px-4 py-2 rounded-lg hover:bg-blue-400 font-semibold'
					type='button'
					onClick={handleClick}>
					Open Dialog
				</button>

				<div>
					<p>NOTIFICATIONS</p>

					<div className='flex flex-row flex-wrap gap-2'>
						{array.map((type) => (
							<button
								key={type.label}
								className={`${type.color} px-4 py-2 rounded-lg ${type.hoverColor} font-semibold`}
								type='button'
								onClick={() => handleNotification(type.label.toLowerCase())}>
								{type.label}
							</button>
						))}
					</div>
				</div>
			</div>
			{/* <CopyBlock
				customStyle={{
					fontSize: '1rem',
					textAlign: 'start',
					borderRadius: '10px',
					lineHeight: '1rem'
				}}
				language='jsx'
				text={samples.notification}
				showLineNumbers={true}
				theme={atomOneDark}
				wrapLines={true}
				codeBlock
			/> */}
		</>
	)
}

export default App
