import { useTransition, animated } from '@react-spring/web'
import { notificationAnimations, positionClasses } from '../helper'
import Notification from './Notification'

const NotificationStack = ({
	closeNotification,
	notificationOptions,
	position,
	animation
}) => {
	const transitions = useTransition(notificationOptions, {
		key: (notification) => notification.id,
		...notificationAnimations[animation]
	})

	const isTop = position.includes('top')

	return (
		<div
			id='stack'
			className={`fixed flex gap-2  ${isTop ? 'flex-col-reverse' : 'flex-col'}  ${positionClasses[position]} z-[99999]`}>
			{transitions((style, notification) => (
				<animated.div
					style={style}
					key={notification.id}>
					<Notification
						closeNotification={closeNotification}
						isOpen={notification.isOpen}
						options={notification}
					/>
				</animated.div>
			))}
		</div>
	)
}

export default NotificationStack
