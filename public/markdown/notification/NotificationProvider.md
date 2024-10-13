## NotificationProvider Component

The `NotificationProvider` component serves as the context provider for handling and displaying notifications in a React application. It wraps the application and provides a mechanism for managing notifications, including displaying them with a limit on the number of visible notifications, positioning them on the screen, and allowing customizable animations and behaviors.

### Props:

- `children`: React components that will be rendered inside the `NotificationProvider`.
- `setup`: An optional configuration object that allows customization of the notification stack:
  - `maxNotifications`: Maximum number of notifications visible at a time (default is `3`).
  - `position`: Screen position where notifications will be shown (default is `bottom-right`).
  - `animation`: Type of animation applied to notifications (default is `fadeScale`).

### Notification Context:

The `NotificationContext` provides the following methods:
- `notificationHandler(newProps, options)`: Function to add a new notification with customizable properties:
  - `newProps`: The message or content of the notification.
  - `options`: Includes:
    - `type`: Defines the notification type (`success`, `info`, `warning`, `danger`, `ok`).
    - `variant`: The style of the notification (`regular`, `filled`, `outlined`).
    - `behavior`: Determines if the notification auto-hides or persists (`autoHide`, `persistent`).
    - `timeOut`: Duration (in milliseconds) before the notification auto-hides (only applicable if `autoHide` behavior is used).
- `closeNotification(id)`: Function to manually close a specific notification by its ID.

### Example Usage:

```jsx

import { createContext, useState, useContext, useCallback } from 'react'
import { nanoid } from 'nanoid'
import NotificationStack from './NotificationStack'

const NotificationContext = createContext()

export const NotificationProvider = ({
	children,
	setup = {
		maxNotifications: 3,
		position: 'bottom-right',
		animation: 'fadeScale'
	}
}) => {
	const [notificationOptions, setNotificationOptions] = useState([])
	const { position, maxNotifications, animation } = setup

	const notificationHandler = useCallback(
		async (
			newProps = 'LOREM IPSUM DOLOR SIT',
			{
				type = 'info',
				variant = 'regular',
				behavior = 'autoHide',
				timeOut = 3000
			} = {}
		) => {
			try {
				validateProps({ behavior, variant, type })

				const id = nanoid()
				const isPersistent = behavior === 'persistent'

				setNotificationOptions((prevNotifications) => {
					const filteredNotifications = prevNotifications.filter(
						(notification) => notification.id !== id
					)

					const updatedNotifications = [
						...filteredNotifications.slice(
							Math.max(filteredNotifications.length - (maxNotifications - 1), 0)
						),
						{
							id,
							type,
							variant,
							persistent: isPersistent,
							behavior,
							timer: timeOut / 1000,
							isOpen: true,
							newProps
						}
					]

					if (!isPersistent) {
						setTimeout(() => {
							setNotificationOptions((prev) =>
								prev.filter((notification) => notification.id !== id)
							)
						}, timeOut)
					}

					return updatedNotifications
				})

				return id
			} catch (error) {
				console.error('Notification Handler Error:', error.message)
				throw error
			}
		},
		[maxNotifications]
	)

	const closeNotification = (id) => {
		setNotificationOptions((prev) =>
			prev.filter((notification) => notification.id !== id)
		)
	}

	return (
		<NotificationContext.Provider
			value={{ notificationHandler, closeNotification }}>
			<NotificationStack
				closeNotification={closeNotification}
				animation={animation}
				notificationOptions={notificationOptions}
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

const validateProps = ({ behavior, variant, type }) => {
	if (!['autoHide', 'persistent'].includes(behavior)) {
		throw new Error(
			`Invalid behavior value: ${behavior}. Expected: 'autoHide' || 'persistent'.`
		)
	}

	if (!['regular', 'filled', 'outlined'].includes(variant)) {
		throw new Error(
			`Invalid variant value: ${variant}. Expected: 'regular' || 'filled' || 'outlined'.`
		)
	}

	if (!['success', 'info', 'warning', 'danger', 'ok'].includes(type)) {
		throw new Error(
			`Invalid type value: ${type}. Expected: 'success' || 'info' || 'warning' || 'danger' || 'ok'.`
		)
	}

	return true
}
