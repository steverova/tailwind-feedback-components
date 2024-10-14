## NotificationStack Component

`NotificationStack` is a React component that manages a stack of notifications, displaying them with customizable animations and positions. It uses `useTransition` from `@react-spring/web` to handle the entrance and exit animations of each notification.

### Props:

- `closeNotification`: Function to close a specific notification.
- `notificationOptions`: Array of notification objects, each containing:
  - `id`: Unique identifier for the notification.
  - `isOpen`: Boolean indicating whether the notification is visible.
  - Additional properties to pass to the `Notification` component.
- `position`: Defines the screen position where the notification stack will be rendered. Uses predefined CSS classes (e.g., `top-right`, `bottom-left`).
- `animation`: The type of animation for notifications, referencing configurations from `notificationAnimations`.

### Features:

- **Animated Notification Stack**: Each notification is animated in and out using `useTransition`, based on the animation type provided.
- **Custom Positioning**: Notifications can appear at different positions on the screen (e.g., top-right, bottom-left).
- **Dynamic Rendering**: Renders the notification stack based on an array of notifications, each identified by a unique `id`.

### Example:

```jsx
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

	return (
		<div
			id='stack'
			className={`fixed flex flex-col gap-2 
			${positionClasses[position]} z-50`}>
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
