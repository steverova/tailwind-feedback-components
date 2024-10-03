import { createContext, useCallback, useContext, useState } from 'react'
import { placeholder } from '../helper'
import { AlertDialog } from './AlertDialog'

const AlertDialogContext = createContext()

/**
 * AlertDialogProvider - Provider component for the AlertDialog context
 *
 * @param {Object} props - Props for the provider
 * @param {ReactNode} props.children - Child components
 * @param {Object} [props.textOptions] - Text options for the dialog buttons
 * @param {string} [props.textOptions.cancelText='Cancel'] - Text for the cancel button
 * @param {string} [props.textOptions.confirmText='Confirm'] - Text for the confirm button
 * @returns {JSX.Element}
 *
 * @example
 * // Usage of AlertDialogProvider
 * import { AlertDialogProvider } from './AlertDialogProvider';
 *
 * function App() {
 *   return (
 *     <AlertDialogProvider textOptions={{ cancelText: 'No', confirmText: 'Yes' }}>
 *       <MyComponent />
 *     </AlertDialogProvider>
 *   );
 * }
 *
 * function MyComponent() {
 *   const { alertDialogHandler } = useAlertDialog();
 *
 *   const handleClick = async () => {
 *     const result = await alertDialogHandler({
 *       title: 'Confirm Action',
 *       message: 'Are you sure you want to proceed?',
 *       type: 'warning',
 *     });
 *     console.log(result); // Logs true or false based on user confirmation
 *   };
 *
 *   return <button onClick={handleClick}>Open Dialog</button>;
 * }
 */

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

	/**
	 * alertDialogHandler
	 *
	 * This handler opens an alert dialog with the specified options.
	 * It returns a promise that resolves to true or false depending on the user's confirmation.
	 *
	 * @type {Function}
	 * @param {Object} options - Options to configure the alert dialog.
	 * @param {string} options.title - The title of the dialog.
	 * @param {string} options.message - The message displayed in the dialog.
	 * @param {'info'|'success'|'warning'|'error'} [options.type='info'] - The type of the dialog, which determines its styling.
	 *  - 'info': Blue background, informational icon.
	 *  - 'success': Green background, success icon.
	 *  - 'warning': Yellow background, warning icon.
	 *  - 'error': Red background, error icon.
	 * @returns {Promise<boolean>} A promise that resolves to `true` if the user confirms the dialog, or `false` if canceled.
	 */

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

export const useAlertDialog = () => {
	const context = useContext(AlertDialogContext)
	if (!context) {
		throw new Error('useAlertDialog must be used within an AlertDialogProvider')
	}
	return context
}
