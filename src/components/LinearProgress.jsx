import { useSpring, animated } from '@react-spring/web'

const LinearProgress = () => {
	// Animación usando react-spring
	const animationProps = useSpring({
		from: { transform: 'translateX(-100%)' },
		to: { transform: 'translateX(100%)' },
		loop: true, 
		config: { duration: 1500 }
	})

	return (
		<div className='relative w-full h-1 bg-gray-300 overflow-hidden bottom-0'>
			<animated.div
				style={animationProps}
				className='absolute h-full w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
			/>
		</div>
	)
}

export default LinearProgress
