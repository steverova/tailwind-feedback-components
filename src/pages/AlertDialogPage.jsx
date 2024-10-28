import { useAlertDialog } from '@/components/AlertDialog/AlertDialogProvider'
import Button from '@/components/Button/Button'

import Gist from 'react-gist';

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
		<div className='flex flex-col justify-center items-center'>
			<div className='my-12 flex gap-3'>
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

			<div className='container w-full'>
				<h2>AlertDialogProvider.jsx</h2>
				<Gist id="2875e2e6c6309f4b42b00ffe6aec2073" file='AlertDialogProvider.jsx' />
			</div>
		</div>
	)
}

export default AlertDialogPage
// 2875e2e6c6309f4b42b00ffe6aec2073
