import { useRef } from 'react'
import { types } from '../helper'

export const AlertDialog = ({
	isOpen = false,
	onClose = () => {},
	options,
	textOptions
}) => {
	const { title, message, type } = options
	const { confirmText, cancelText } = textOptions
	const modalRef = useRef(null)

	return (
		<>
			{isOpen && (
				<div
					role='alertdialog'
					className='relative z-10'
					aria-labelledby='modal-title'
					aria-modal='true'
					aria-hidden={!isOpen}>
					{/* Background Overlay */}
					<div
						className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
						aria-hidden='true'
					/>

					{/* Modal Container */}
					<div className='fixed inset-0 z-10 flex items-center justify-center'>
						<div
							className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg'
							tabIndex='-1'
							ref={modalRef}>
							{/* Modal Content */}
							<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div
										className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${types[type].color} sm:mx-0 sm:h-10 sm:w-10`}>
										{types[type].icon}
									</div>
									<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
										<h3
											className='text-base font-semibold leading-6 text-gray-900'
											id='modal-title'>
											{title}
										</h3>
										<div className='mt-2'>
											<p
												className='text-sm text-gray-500'
												id='modal-description'>
												{message}
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* Modal Actions */}
							<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
								<button
									type='button'
									className={`inline-flex w-full justify-center rounded-md ${types[type].accentColor} px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto hover:${types[type].hoverColor}`}
									onClick={() => onClose(true)}>
									{confirmText}
								</button>
								{type !== 'ok' && (
									<button
										type='button'
										className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
										onClick={() => onClose(false)}>
										{cancelText}
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
