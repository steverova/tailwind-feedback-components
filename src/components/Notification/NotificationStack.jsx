import { useTransition, animated } from '@react-spring/web'
import { notificationAnimations, positionClasses } from '../helper'
import Notification from './Notification'

const NotificationStack = ({ notifications, position, animation }) => {
	
  const transitions = useTransition(notifications, {
    key: notification => notification.id,
    ...notificationAnimations[animation],
  });

	return (
		<div
			id='stack'
			className={`fixed flex flex-col gap-2 ${positionClasses[position]}`}>
			{transitions((style, notification) => (
				<animated.div
					style={style}
					key={notification.id}>
					<Notification
						isOpen={notification.isOpen}
						options={notification}
					/>
				</animated.div>
			))}
		</div>
	)
}

export default NotificationStack
