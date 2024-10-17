import './App.css'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { NotificationProvider } from './components/Notification/NotificationProvider'
import { AlertDialogProvider } from './components/AlertDialog/AlertDialogProvider'
import { WrapperNotification } from './hooks/wrapperFactory'
import FloatMenu from './components/FloatMenu/FloatMenu'

function App() {

	const [notificationsMethods, setNotificationsMethods] = useState({
		maxNotifications: 10,
		position: 'bottom-right',
		animation: 'fadeScale'
	})

	const myMethods = {
		notificationsMethods,
		setNotificationsMethods
	}

	return (
		<WrapperNotification value={myMethods}>
			<NotificationProvider setup={notificationsMethods}>
				<AlertDialogProvider>
					<RouterProvider router={router} />
					<FloatMenu/>
				</AlertDialogProvider>
			</NotificationProvider>
		</WrapperNotification>
	)
}

export default App
