import { createContext, useState, useContext, useCallback } from 'react'
import Notification from './Notification'

const placeholder = {
	title: 'Lorem Ipsum',
	message:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
	type: 'info',
	variant: 'regular',
	autoHide: 3000
}

const NotificationContext = createContext()

export const NotificationProvider = ({
	children,
}) => {
	const [options, setOptions] = useState(placeholder)

	const [notificationState, setNotificationState] = useState({
		isOpen: false,
		resolve: null
	})

	const notificationHandler = useCallback(
		({
			title = placeholder.title,
			message = placeholder.message,
			type = placeholder.type,
			variant = placeholder.variant,
			autoHide = placeholder.autoHide
		} = placeholder) => {
			setOptions({ title, message, type, variant, timer: autoHide / 1000 })
			setNotificationState({ isOpen: true })

			setTimeout(() => {
				setNotificationState({ isOpen: false })
			}, autoHide)
		},
		[]
	)

	return (
		<NotificationContext.Provider value={{ notificationHandler }}>
			<Notification
				isOpen={notificationState.isOpen}
				options={options}
			/>

			{children}
		</NotificationContext.Provider>
	)
}

export const useNotification = () => {
	const context = useContext(NotificationContext)
	if (!context) {
		throw new Error(
			'useAlertDialog must be used within an NotificationProvider'
		)
	}
	return context
}
