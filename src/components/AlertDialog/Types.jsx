import {
	InfoIcon,
	CircleCheckBigIcon,
	CircleCheckIcon,
	ShieldAlertIcon,
	OctagonAlertIcon
} from 'lucide-react'

const SIZE = 25

export const types = {
	info: {
		label: 'Info',
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		hoverColor: 'hover:bg-blue-600',
		border: 'border-blue-500',
		text: 'text-blue-700',
		icon: (
			<InfoIcon
				size={SIZE}
				className='text-blue-700'
			/>
		),
		progress: 'from-blue-400 via-blue-500 to-blue-600'
	},
	ok: {
		label: 'Ok',
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		hoverColor: 'hover:bg-blue-600',
		border: 'border-blue-500',
		text: 'text-blue-700',
		icon: (
			<CircleCheckIcon
				size={SIZE}
				className='text-blue-700'
			/>
		),
		progress: 'from-blue-400 via-blue-500 to-blue-600'
	},
	success: {
		label: 'Success',
		color: 'bg-emerald-100',
		accentColor: 'bg-emerald-500',
		border: 'border-emerald-500',
		text: 'text-emerald-700',
		hoverColor: 'hover:bg-emerald-600',
		icon: (
			<CircleCheckBigIcon
				size={SIZE}
				className='text-emerald-700'
			/>
		),
		progress: 'from-emerald-400 via-emerald-500 to-emerald-600'
	},
	warning: {
		label: 'Warning',
		color: 'bg-yellow-100',
		accentColor: 'bg-yellow-500',
		border: 'border-yellow-500',
		text: 'text-yellow-700',
		hoverColor: 'hover:bg-yellow-600',
		icon: (
			<ShieldAlertIcon
				size={SIZE}
				className='text-yellow-700'
			/>
		),
		progress: 'from-yellow-400 via-yellow-500 to-yellow-600'
	},
	danger: {
		label: 'Danger',
		color: 'bg-red-100',
		accentColor: 'bg-red-500',
		border: 'border-red-500',
		text: 'text-red-700',
		hoverColor: 'hover:bg-red-600',
		icon: (
			<OctagonAlertIcon
				size={SIZE}
				className='text-red-700'
			/>
		),
		progress: 'from-red-400 via-red-500 to-red-600'
	}
}
