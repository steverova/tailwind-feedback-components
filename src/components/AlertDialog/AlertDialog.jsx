import { useEffect, useState, useRef } from 'react'
import { types } from './Types'
import { useTransition, animated } from '@react-spring/web'

export const AlertDialog = ({
	isOpen = false,
	onClose = () => {},
	options = {
		title: '',
		message: '',
		type: ''
	},
	textOptions = {
		confirmText: 'Confirm',
		cancelText: 'Cancel'
	}
}) => {
	const [showDialog, setShowDialog] = useState(isOpen)
	const modalRef = useRef(null)

	// Sincroniza el estado interno con isOpen
	useEffect(() => {
		if (isOpen) {
			setShowDialog(true)
		}
	}, [isOpen])

	// Configuración de las transiciones
	const transitions = useTransition(true, {
		from: { opacity: 0, transform: 'scale(0.8)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0.8)' },
		onRest: () => {
			if (!showDialog) {
				onClose(false)
			}
		}
	})

	const { title, message, type } = options
	const { confirmText, cancelText } = textOptions

	if (!types[type]) {
		throw new Error('Invalid type')
	}

	// Retorna null si el dialogo no debe mostrarse
	if (!showDialog) return null

	return (
		<div
			role='alertdialog'
			className='relative z-10'
			aria-labelledby='modal-title'
			aria-hidden={!isOpen}>
			{/* Background Overlay */}
			<div
				className='fixed inset-0 bg-neutral-900 bg-opacity-90 transition-opacity'
				aria-hidden='true'
			/>

			{/* Modal Container */}
			<div>
				{transitions(
					(style, item) =>
						item && (
							<animated.div
								style={style}
								className='fixed inset-0 z-10 flex items-center justify-center mx-6 lg:mx-0'
								tabIndex='-1'
								ref={modalRef}>
								<div className='relative transform overflow-hidden dark:bg-neutral-900 border-[0.1rem] border-neutral-700 bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg rounded-[24px]'>
									<div className='px-3 pb-4 pt-5 sm:p-6 sm:pb-4 w-full min-h-[110px]'>
										<div className='sm:flex sm:items-start'>
											<div
												className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${types[type].color} sm:mx-0 sm:h-10 sm:w-10`}>
												{types[type].icon}
											</div>
											<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left mx-2'>
												<p
													className='text-xl font-normal leading-6 text-gray-900 dark:text-white/85'
													id='modal-title'>
													{title}
												</p>
												<div className='mt-2'>
													<p
														className='text-md text-gray-500 text-left dark:text-white/85'
														id='modal-description'>
														{message}
													</p>
												</div>
											</div>
										</div>
									</div>
									{/* Modal Actions */}
									<div className='px-4 pb-3 flex flex-row justify-end sm:px-4 w-full items-end gap-3'>
										{!['ok', 'ok_neutral'].includes(type) && (
											<button
												type='button'
												className={`mt-3 px-3 py-2 text-sm font-normal ring-gray-300 hover:bg-gray-50 ${types[type].hoverDark} sm:mt-0 sm:w-auto ${types[type].text} rounded-[24px]`}
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
											className={`rounded-[24px] justify-center ${types[type].accentColor} ${types[type].accentColorDark} px-3 py-2 text-sm font-normal text-white shadow-sm sm:w-auto ${types[type].hoverColor} hover:drop-shadow-xl`}
											onClick={() => onClose(true)}>
											{confirmText}
										</button>
									</div>
								</div>
							</animated.div>
						)
				)}
			</div>
		</div>
	)
}
