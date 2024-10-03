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

export const types = {
	info: {
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		hoverColor: 'bg-blue-700',
		border: 'border-blue-500',
		icon: <InfoIcon className='text-blue-700' />
	},
	ok: {
		color: 'bg-blue-100',
		accentColor: 'bg-blue-500',
		hoverColor: 'bg-blue-700',
		border: 'border-blue-500',
		icon: <CircleCheckIcon className='text-blue-700' />
	},
	success: {
		color: 'bg-emerald-100',
		accentColor: 'bg-emerald-500',
		border: 'border-emerald-500',
		hoverColor: 'bg-emerald-700',
		icon: <CircleCheckBigIcon className='text-emerald-700' />
	},
	warning: {
		color: 'bg-yellow-100',
		accentColor: 'bg-yellow-500',
		border: 'border-yellow-500',
		hoverColor: 'bg-yellow-700',
		icon: <ShieldAlertIcon className='text-yellow-700' />
	},
	error: {
		color: 'bg-red-100',
		accentColor: 'bg-red-500',
		border: 'border-red-500',
		hoverColor: 'bg-red-700',
		icon: <OctagonAlertIcon className='text-red-700' />
	}
}
