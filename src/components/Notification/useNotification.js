import { createContext, useState, useContext, useCallback } from 'react'
import { nanoid } from 'nanoid'
import NotificationStack from './NotificationStack'

const defaultValues = {
	title: 'Lorem Ipsum',
	message:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
	type: 'info',
	variant: 'regular',
	autoHide: 3000,
	persistent: false
}

const NotificationContext = createContext()

export const NotificationProvider = ({
	children,
	setup = {
		maxNotifications: 3,
		position: 'bottom-right',
		animation: 'fadeScale'
	}
}) => {
	const [notifications, setNotifications] = useState([])
	const { position, maxNotifications, animation } = setup

	const notificationHandler = useCallback(
		({
			title = defaultValues.title,
			message = defaultValues.message,
			type = defaultValues.type,
			variant = defaultValues.variant,
			persistent = false,
			autoHide = defaultValues.autoHide
		}) => {
			const id = nanoid()

			const newNotification = {
				id,
				title,
				message,
				type,
				variant,
				persistent,
				timer: persistent ? null : autoHide / 1000,
				isOpen: true
			}

			setNotifications((prevNotifications) => {
				const filteredNotifications = prevNotifications.filter(
					(notification) => notification.id !== id
				)

				const updatedNotifications = [
					...filteredNotifications.slice(
						Math.max(filteredNotifications.length - (maxNotifications - 1), 0)
					),
					newNotification
				]

				if (!persistent) {
					setTimeout(() => {
						setNotifications((prev) =>
							prev.filter((notification) => notification.id !== id)
						)
					}, autoHide)
				}

				return updatedNotifications
			})

			return id
		},
		[maxNotifications]
	)

	const closeNotification = (id) => {
		setNotifications((prev) =>
			prev.filter((notification) => notification.id !== id)
		)
	}

	return (
		<NotificationContext.Provider value={{ notificationHandler }}>
			<NotificationStack
				closeNotification={closeNotification}
				animation={animation}
				notifications={notifications}
				position={position}
			/>
			{children}
		</NotificationContext.Provider>
	)
}

export const useNotification = () => {
	const context = useContext(NotificationContext)
	if (!context) {
		throw new Error(
			'useNotification must be used within a NotificationProvider'
		)
	}
	return context
}
