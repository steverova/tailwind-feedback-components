import {
	InfoIcon,
	CircleCheckBigIcon,
	CircleCheckIcon,
	ShieldAlertIcon,
	OctagonAlertIcon
} from 'lucide-react'

export const placeholder = {
	title: 'Lorem Ipsum',
	message:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
	type: 'error'
}

export const positionClasses = {
	'top-left': 'top-4 left-4',
	'top-right': 'top-4 right-4',
	'bottom-left': 'bottom-4 left-4',
	'bottom-right': 'bottom-4 right-4'
}

export const types = {
	info: {
		label: 'Info',
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		hoverColor: 'hover:bg-blue-500',
		border: 'border-blue-500',
		icon: <InfoIcon className='text-blue-700' />
	},
	ok: {
		label: 'Ok',
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		hoverColor: 'hover:bg-blue-500',
		border: 'border-blue-500',
		icon: <CircleCheckIcon className='text-blue-700' />
	},
	success: {
		label: 'Success',
		color: 'bg-emerald-100',
		accentColor: 'bg-emerald-500',
		border: 'border-emerald-500',
		hoverColor: 'hover:bg-emerald-500',
		icon: <CircleCheckBigIcon className='text-emerald-700' />
	},
	warning: {
		label: 'Warning',
		color: 'bg-yellow-100',
		accentColor: 'bg-yellow-500',
		border: 'border-yellow-500',
		hoverColor: 'hover:bg-yellow-500',
		icon: <ShieldAlertIcon className='text-yellow-700' />
	},
	error: {
		label: 'Error',
		color: 'bg-red-100',
		accentColor: 'bg-red-500',
		border: 'border-red-500',
		hoverColor: 'hover:bg-red-500',
		icon: <OctagonAlertIcon className='text-red-700' />
	}
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
