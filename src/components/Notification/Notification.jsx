import { nanoid } from 'nanoid'
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react'
import { types } from '../helper'
import { XIcon } from 'lucide-react'

const Notification = ({ closeNotification, options, isOpen = false }) => {
	const animationProps = useSpring({
		from: { transform: 'translateX(-100%)' },
		to: { transform: 'translateX(100%)' },
		loop: true,
		config: { duration: 1500 }
	})

	console.log('options ->', options)
	const { type, variant, timer, persistent, id, newProps } = options
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
					'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
			}}
			className={`max-w-xs rounded-lg overflow-hidden 
				${variant === 'filled' ? types[type].accentColor : variant === 'outlined' ? `border-2 bg-white z-100 ${types[type].border}` : 'bg-white'}
			`}
			role='alert'
			tabIndex='-1'
			aria-labelledby='hs-toast-normal-example-label'>
			<div className='flex px-4 '>
				<div className='flex space-x-1  absolute top-1 right-1'>
					{persistent && (
						<button
							onClick={() => closeNotification(id)}
							type='button'
							className='bg-slate-100 hover:bg-slate-300 p-1 rounded-full border-2 shadow-lg'>
							<XIcon
								className={`${types[type].text}`}
								size={12}
							/>
						</button>
					)}
				</div>

				{!persistent && (
					<div className='flex space-x-1 p-1 absolute top-0 right-0'>
						{Array.from({ length: remainingDots }).map((_) => (
							<div
								key={nanoid()}
								className={`h-2 w-2 rounded-full ${variant === 'filled' ? 'bg-white' : types[type].accentColor}`}
							/>
						))}
					</div>
				)}

				<div className='flex flex-row my-3 items-center gap-3 me-6 min-w-52'>
					<div
						className={`h-10 w-10 flex items-center justify-center rounded-full ${types[type].color}`}>
						{types[type].icon}
					</div>

					<div>
						<h3
							className={`text-left font-semibold w-full items-center ${
								variant === 'filled'
									? 'text-white'
									: 'text-gray-700 dark:text-neutral-800'
							}`}>
							{newProps}
						</h3>
					</div>
				</div>
			</div>
			{persistent && (
				<div className='relative w-full h-1 bg-gray-300 overflow-hidden bottom-0 mt-1'>
					<animated.div
						style={animationProps}
						className={`absolute h-full w-full bg-gradient-to-r from-blue-400 ${types[type].progress}`}
					/>
				</div>
			)}
		</div>
	)
}

export default Notification
