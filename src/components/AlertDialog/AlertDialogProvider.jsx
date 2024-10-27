import { createContext, useCallback, useContext, useState } from 'react'
import { placeholder } from '../helper'
import { AlertDialog } from './AlertDialog'

const AlertDialogContext = createContext()

export const AlertDialogProvider = ({
	children,
	textOptions = {
		cancelText: 'Cancel',
		confirmText: 'Confirm'
	}
}) => {
	const [options, setOptions] = useState(placeholder)

	const [dialogState, setDialogState] = useState({
		isOpen: false,
		resolve: null
	})

	const alertDialogHandler = useCallback(
		({
			title = placeholder.title,
			message = placeholder.message,
			type = placeholder.type
		} = placeholder) => {
			setOptions({ title, message, type })
			return new Promise((resolve) => {
				setDialogState({ isOpen: true, resolve })
			})
		},
		[]
	)

	const handleDialogClose = (result) => {
		if (dialogState.resolve) {
			dialogState.resolve(result)
		}
		setDialogState({ isOpen: false, resolve: null })
	}

	return (
		<AlertDialogContext.Provider value={{ alertDialogHandler }}>
			<AlertDialog
				textOptions={textOptions}
				isOpen={dialogState.isOpen}
				onClose={handleDialogClose}
				options={options}
			/>
			{children}
		</AlertDialogContext.Provider>
	)
}

export const    useAlertDialog = () => {
	const context = useContext(AlertDialogContext)
	if (!context) {
		throw new Error('useAlertDialog must be used within an AlertDialogProvider')
	}
	return context
}
