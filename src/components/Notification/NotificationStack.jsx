import { positionClasses } from '../helper'
import Notification from './Notification'

const NotificationStack = ({ notifications, position }) => {
	return (
		<div
			id='stack'
			className={`fixed flex flex-col gap-2 ${positionClasses[position]}`}>
			{notifications.map((notification) => (
				<Notification
					key={notification.id}
					isOpen={notification.isOpen}
					options={notification}
				/>
			))}
		</div>
	)
}
export default NotificationStack
