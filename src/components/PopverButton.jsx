import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const PopoverButton = ({ children, title = 'title' }) => {
	const [isPopoverVisible, setPopoverVisible] = useState(false)

	const togglePopover = () => {
		setPopoverVisible(!isPopoverVisible)
	}

	return (
		<div>
			<button
				type='button'
				data-ripple-light='true'
				onClick={togglePopover}
				aria-expanded={isPopoverVisible}
				aria-controls='popover-content'
				className='flex items-center justify-center font-medium text-slate-600 hover:text-emerald-900 w-full'>
				<span className='flex items-center justify-center space-x-2'>
					<span className='text-center'>{title}</span>{' '}
					<ChevronDownIcon
						className={`w-4 h-4 transition-transform ${isPopoverVisible ? 'rotate-360' : '-rotate-90'}`}
					/>
				</span>
			</button>

			{isPopoverVisible && (
				<div className='absolute p-4 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none mt-1'>
					{children}
				</div>
			)}
		</div>
	)
}

export default PopoverButton
