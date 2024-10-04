import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { types } from '../helper'

const Notification = ({ options, isOpen = false }) => {
	const { title, message, type, variant, timer } = options
	const [remainingDots, setRemainingDots] = useState(timer)

	useEffect(() => {
		if (isOpen) {
			setRemainingDots(timer)
			const interval = setInterval(() => {
				setRemainingDots((prevDots) => (prevDots > 0 ? prevDots - 1 : 0))
			}, 1000)
			return () => clearInterval(interval)
		}
	}, [isOpen, timer])

	return (
		<div
			style={{
				zIndex: 9999,
				boxShadow:
					'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
				borderRadius: '0.75rem'
			}}
			className={`max-w-xs rounded-xl ${variant === 'filled' && types[type].color} ${variant === 'outlined' && types[type].border} border`}
			role='alert'
			tabIndex='-1'
			aria-labelledby='hs-toast-normal-example-label'>
			<div className='flex p-4'>
				<div className='flex space-x-1 p-1 absolute top-1 right-1'>
					{Array.from({ length: remainingDots }).map((dot) => (
						<div
							key={nanoid()}
							className={`h-2 w-2 rounded-full ${types[type].accentColor}`}
						/>
					))}
				</div>

				<div className='shrink-0'>
					<div
						className={`h-8 w-8 flex items-center justify-center rounded-full ${types[type].color}`}>
						{types[type].icon}
					</div>
				</div>

				<div className='ms-3'>
					{title && <h3 className='text-left'>{title}</h3>}
					<p
						id='hs-toast-normal-example-label'
						className='text-sm text-gray-700 dark:text-neutral-400 text-left'>
						{message}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Notification
