import {
	InfoIcon,
	CircleCheckBigIcon,
	CircleCheckIcon,
	ShieldAlertIcon,
	OctagonAlertIcon
} from 'lucide-react'

const SIZE = 25

const neutralBase = {
	color: 'bg-neutral-100',
	accentColor: 'bg-neutral-500',
	accentColorDark: 'dark:bg-neutral-900',
	hoverColor: 'hover:bg-neutral-600',
	border: 'border-neutral-500',
	text: 'text-neutral-700',
	hoverDark: 'dark:hover:bg-neutral-900/15',
	progress: 'from-neutral-400 via-neutral-500 to-neutral-600'
}

export const types = {
	neutral: {
		label: 'Neutral',
		...neutralBase,
		icon: (
			<InfoIcon
				size={SIZE}
				className='text-neutral-700'
			/>
		)
	},
	ok: {
		label: 'Ok',
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		accentColorDark: 'dark:bg-blue-900',
		hoverColor: 'hover:bg-blue-600',
		border: 'border-blue-500',
		text: 'text-blue-700',
		hoverDark: 'dark:hover:bg-blue-900/15',
		icon: (
			<CircleCheckIcon
				size={SIZE}
				className='text-blue-700'
			/>
		),
		progress: 'from-blue-400 via-blue-500 to-blue-600'
	},
	info: {
		label: 'Info',
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		accentColorDark: 'dark:bg-blue-900',
		hoverColor: 'hover:bg-blue-600',
		border: 'border-blue-500',
		text: 'text-blue-700',
		hoverDark: 'dark:hover:bg-blue-900/15',
		icon: (
			<InfoIcon
				size={SIZE}
				className='text-blue-700'
			/>
		),
		progress: 'from-blue-400 via-blue-500 to-blue-600'
	},
	success: {
		label: 'Success',
		color: 'bg-emerald-100',
		accentColorDark: 'dark:bg-emerald-900',
		accentColor: 'bg-emerald-500',
		border: 'border-emerald-500',
		text: 'text-emerald-700',
		hoverColor: 'hover:bg-emerald-600',
		hoverDark: 'dark:hover:bg-emerald-900/15',
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
		accentColorDark: 'dark:bg-yellow-900',
		accentColor: 'bg-yellow-500',
		border: 'border-yellow-500',
		text: 'text-yellow-700',
		hoverColor: 'hover:bg-yellow-600',
		hoverDark: 'dark:hover:bg-yellow-900/15',
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
		accentColorDark: 'dark:bg-red-900',
		accentColor: 'bg-red-500',
		border: 'border-red-500',
		text: 'text-red-700',
		hoverColor: 'hover:bg-red-600',
		hoverDark: 'dark:hover:bg-red-900/15',
		icon: (
			<OctagonAlertIcon
				size={SIZE}
				className='text-red-700'
			/>
		),
		progress: 'from-red-400 via-red-500 to-red-600'
	},
	info_neutral: {
		label: 'Info-Neutral',
		...neutralBase,
		icon: (
			<InfoIcon
				size={SIZE}
				className='text-neutral-700'
			/>
		)
	},
	success_neutral: {
		label: 'Success-Neutral',
		...neutralBase,
		icon: (
			<CircleCheckBigIcon
				size={SIZE}
				className='text-neutral-700'
			/>
		)
	},
	warning_neutral: {
		label: 'Warning-Neutral',
		...neutralBase,
		icon: (
			<ShieldAlertIcon
				size={SIZE}
				className='text-neutral-700'
			/>
		)
	},
	danger_neutral: {
		label: 'Danger-Neutral',
		...neutralBase,
		icon: (
			<OctagonAlertIcon
				size={SIZE}
				className='text-neutral-700'
			/>
		)
	},
	ok_neutral: {
		label: 'Ok-Neutral',
		...neutralBase,
		icon: (
			<CircleCheckIcon
				size={SIZE}
				className='text-neutral-700'
			/>
		)
	}
}
