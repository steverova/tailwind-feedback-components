import { AlertDialog } from '@/components/AlertDialog/AlertDialog'
import { useAlertDialog } from '@/components/AlertDialog/AlertDialogProvider'
import Button from '@/components/Button/Button'
import Gist from 'react-gist'
import AlertDialogMock from './AlertDialogMock'
import { useState } from 'react'

const AlertDialogPage = () => {
	const { alertDialogHandler } = useAlertDialog()
	const [type, setType] = useState('info')

	const handlerType = (type) => {
		setType(type)
	}

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
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-400 text-center p-8">
			<div className="max-w-4xl w-full my-12   rounded-lg p-8 flex flex-col items-center">
				<h1 className="text-4xl font-bold text-blue-700 mb-4">Alert Dialog Demo</h1>
				<p className="text-lg text-gray-600 mb-8">
				A minimal alert dialog component  to display information, created with tailwind 
				</p>

				<AlertDialogMock type={type} />

				<section id="demo" className="my-12">
					<div className="flex gap-3 justify-center">
						{['info', 'success', 'warning', 'danger', 'ok'].map((type) => (
							<Button
								onMouseEnter={() => handlerType(type)}
								color={type}
								key={type}
								onClick={() => handleOpenDialog(type)}
								rounded="full"
								className="px-6 py-3"
							>
								{type}
							</Button>
						))}
					</div>
				</section>

				{/* <div className="container w-full mt-12">
					<h2 className="text-2xl font-semibold mb-4">AlertDialogProvider.jsx</h2>
					<Gist
						id="2875e2e6c6309f4b42b00ffe6aec2073"
						file="AlertDialogProvider.jsx"
					/>
				</div> */}
			</div>
		</div>
	)
}

export default AlertDialogPage
