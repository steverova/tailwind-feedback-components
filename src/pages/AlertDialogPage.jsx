import { useAlertDialog } from '@/components/AlertDialog/AlertDialogProvider'
import Button from '@/components/Button/Button'

const AlertDialogPage = () => {
	const { alertDialogHandler } = useAlertDialog()

	const handleOpenDialog = async (type) => {
		const result = await alertDialogHandler({
			title: 'Lorem Ipsum',
			message:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
			type: type
		})
		console.log(result)
	}

	return (
		<div className='flex justify-center items-center content-center h-screen gap-3'>
			{['info', 'success', 'warning', 'danger', 'ok'].map((type) => (
				<Button
					color={type}
					key={type}
					onClick={() => handleOpenDialog(type)}
					rounded='full'>
					{type}
				</Button>
			))}
		</div>
	)
}
export default AlertDialogPage
