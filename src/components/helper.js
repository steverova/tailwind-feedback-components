export const placeholder = {
	title: 'Lorem Ipsum',
	message:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
	type: 'danger'
}

export const positionClasses = {
	'top-left': 'top-4 left-4',
	'top-right': 'top-4 right-4',
	'bottom-left': 'bottom-4 left-4',
	'bottom-right': 'bottom-4 right-4',
	'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
	'top-center': 'top-4 left-1/2 transform -translate-x-1/2'
}

export const notificationAnimations = {
	fadeScale: {
		from: { opacity: 0, transform: 'scale(0.8)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0.8)' }
	},
	slideHorizontal: {
		from: { opacity: 0, transform: 'translateX(-100%)' },
		enter: { opacity: 1, transform: 'translateX(0)' },
		leave: { opacity: 0, transform: 'translateX(100%)' }
	},
	bounce: {
		from: { opacity: 0, transform: 'translateY(-50px)' },
		enter: {
			opacity: 1,
			transform: 'translateY(0)',
			config: { tension: 300, friction: 20 }
		},
		leave: { opacity: 0, transform: 'translateY(50px)' }
	},
	colorFade: {
		from: { opacity: 0, backgroundColor: 'red' },
		enter: { opacity: 1, backgroundColor: 'white' },
		leave: { opacity: 0, backgroundColor: 'blue' }
	},
	slideUp: {
		from: { opacity: 0, transform: 'translateY(100%)' },
		enter: { opacity: 1, transform: 'translateY(0)' },
		leave: { opacity: 0, transform: 'translateY(100%)' }
	},
	rotateFade: {
		from: { opacity: 0, transform: 'rotate(45deg)' },
		enter: { opacity: 1, transform: 'rotate(0deg)' },
		leave: { opacity: 0, transform: 'rotate(45deg)' }
	}
}
