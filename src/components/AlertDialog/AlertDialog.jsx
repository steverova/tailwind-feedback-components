import { useRef } from 'react'
import { types } from './Types'

export const AlertDialog = ({
	isOpen = false,
	onClose = () => {},
	options,
	textOptions
}) => {
	const { title, message, type } = options
	const { confirmText, cancelText } = textOptions
	const modalRef = useRef(null)

	if (!types[type]) {
		throw new Error('Invalid type')
	}

	if (!isOpen) return

	return (
		<div
			role='alertdialog'
			className='relative z-10'
			aria-labelledby='modal-title'
			aria-hidden={!isOpen}>
			{/* Background Overlay */}
			<div
				className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
				aria-hidden='true'
			/>

			{/* Modal Container */}
			<div className='fixed inset-0 z-10 flex items-center justify-center mx-6 lg:mx-0'>
				<div
					style={{ backgroundClip: 'padding-box', overflow: 'hidden' }}
					className='relative transform overflow-hidden  bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg rounded-[24px] '
					tabIndex='-1'
					ref={modalRef}>
					{/* Modal Content */}
					<div className='bg-white px-3 pb-4 pt-5 sm:p-6 sm:pb-4 w-full '>
						<div className='sm:flex sm:items-start '>
							<div
								className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${types[type].color} sm:mx-0 sm:h-10 sm:w-10`}>
								{types[type].icon}
							</div>
							<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left mx-2'>
								<p
									className=' text-xl font-normal leading-6 text-gray-900'
									id='modal-title'>
									{title}
								</p>
								<div className='mt-2 '>
									<p
										className='text-sm text-gray-500 text-left'
										id='modal-description'>
										{message}
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Modal Actions */}
					<div className='px-4 pb-3 flex flex-row justify-end sm:px-4  w-full items-end gap-3'>
						{type !== 'ok' && (
							<button
								type='button'
								className={`mt-3  bg-white px-3 py-2 text-sm font-normal ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${types[type].text} rounded-[24px]`}
								onClick={() => onClose(false)}>
								{cancelText}
							</button>
						)}
						<button
							style={{
								boxShadow:
									'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
							}}
							type='button'
							className={`rounded-[24px] justify-center ${types[type].accentColor} px-3 py-2 text-sm font-normal text-white shadow-sm sm:w-auto ${types[type].hoverColor} hover:drop-shadow-xl`}
							onClick={() => onClose(true)}>
							{confirmText}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
