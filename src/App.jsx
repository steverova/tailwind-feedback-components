import './App.css'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { NotificationProvider } from './components/Notification/NotificationProvider'
import { WrapperNotification } from './hooks/wrapperFactory'

function App() {
	const [notificationsMethods, setNotificationsMethods] = useState({
		maxNotifications: 10,
		position: 'bottom-right',
		animation: 'fadeScale'
	})

	return (
		<WrapperNotification
			value={{
				notificationsMethods,
				setNotificationsMethods
			}}>
			<NotificationProvider setup={notificationsMethods}>
				<RouterProvider router={router} />
			</NotificationProvider>
		</WrapperNotification>
	)
}

export default App
