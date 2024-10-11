import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AlertDialogProvider } from './components/AlertDialog/useAlertDialog'
import { NotificationProvider } from './components/Notification/useNotification'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NotificationProvider
			setup={{
				maxNotifications: 10,
				position: 'bottom-right',
				animation: 'fadeScale'
			}}>
			<AlertDialogProvider>
				
				<App />
			</AlertDialogProvider>
		</NotificationProvider>
	</React.StrictMode>
)
