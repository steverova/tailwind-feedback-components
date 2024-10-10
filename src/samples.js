const samples = {
	notification: `import { createContext, useState, useContext, useCallback } from 'react'
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

const validateProps = ({ behavior, variant, type }) => {
    if (!['autoHide', 'persistent'].includes(behavior)) {
        throw new Error(
            'Invalid behavior value: ' + behavior + '. Expected: \'autoHide\' or \'persistent\'.'
        );
    }

    if (!['regular', 'filled', 'outline'].includes(variant)) {
        throw new Error(
            'Invalid variant value: ' + variant + '. Expected: \'regular\', \'filled\', or \'outline\'.'
        );
    }

    if (!['success', 'info', 'warning', 'danger', 'ok'].includes(type)) {
        throw new Error(
            'Invalid type value: ' + type + '. Expected: \'success\', \'info\', \'warning\', \'danger\', or \'ok\'.'
        );
    }
        
    return true;
};

export const useNotification = () => {
	const context = useContext(NotificationContext)
	if (!context) {
		throw new Error(
			'useNotification must be used within a NotificationProvider'
		)
	}
	return context
}
`
}

export default samples
