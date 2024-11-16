import { types } from '@/components/AlertDialog/Types'

const AlertDialogMock = ({
	title = 'Lorem Ipsum',
	message = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
	type = 'info',
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	modalRef
}) => {
	console.log(types[type].color)

	return (
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
				{!['ok', 'ok_neutral'].includes(type) && (
					<button
						type='button'
						className={`mt-3  bg-white px-3 py-2 text-sm font-normal ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${types[type].text} rounded-[24px]`}>
						{cancelText}
					</button>
				)}
				<button
					style={{
						boxShadow:
							'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
					}}
					type='button'
					className={`rounded-[24px] justify-center ${types[type].accentColor} px-3 py-2 text-sm font-normal text-white shadow-sm sm:w-auto ${types[type].hoverColor} hover:drop-shadow-xl`}>
					{confirmText}
				</button>
			</div>
		</div>
	)
}
export default AlertDialogMock
