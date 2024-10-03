import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AlertDialogProvider } from './components/AlertDialog/useAlertDialog'
import { NotificationProvider } from './components/Notification/useNotification'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NotificationProvider>
			<AlertDialogProvider>
				<App />
			</AlertDialogProvider>
		</NotificationProvider>
	</React.StrictMode>
)
