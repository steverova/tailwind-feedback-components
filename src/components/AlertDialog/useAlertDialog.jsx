import { useCallback, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import { AlertDialog } from './AlertDialog'

const DEFAULT = {
	TEXT_ACTION_BUTTON: {
		cancelText: 'Cancel',
		confirmText: 'Confirm'
	},
	TEXT_ALERT: {
		title: 'Lorem Ipsum',
		message:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
	}
}

let alertDialogContainer = null

/**
 * Displays an alert dialog dynamically and returns a promise that resolves with the user's action.
 * 
 * @example
 * const handleAlert = async () => {
 *   const result = await useAlertDialog({
 *     title: 'Delete Item',
 *     message: 'Are you sure you want to delete this item?',
 *     type: 'warning',
 *     textOptions: {
 *       cancelText: 'No',
 *       confirmText: 'Yes',
 *     },
 *   });
 *   if (result) {
 *     console.log('Item deleted!');
 *   } else {
 *     console.log('Action canceled.');
 *   }
 * };
 *
 * @param {Object} [config] - Configuration options for the alert dialog.
 * @param {string} [config.title=placeholder.title] - The title of the alert dialog.
 * @param {string} [config.message=placeholder.message] - The message to display in the alert dialog.
 * @param {string} [config.type=placeholder.type] - The type of dialog (e.g., 'warning', 'info', etc.).
 * @param {Object} [config.textOptions=DEFAULT_TEXT_OPTIONS] - Text options for the dialog buttons.
 * @param {string} [config.textOptions.cancelText='Cancel'] - Text for the cancel button.
 * @param {string} [config.textOptions.confirmText='Confirm'] - Text for the confirm button.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user confirms, or `false` if the user cancels or navigates away.
 *

 */
export const useAlertDialog = ({
	title = DEFAULT.TEXT_ALERT.title,
	message = DEFAULT.TEXT_ALERT.message,
	type = DEFAULT.TEXT_ALERT.type,
	textOptions = DEFAULT.TEXT_ACTION_BUTTON
} = {}) => {
	if (!alertDialogContainer) {
		alertDialogContainer = document.createElement('div')
		document.body.appendChild(alertDialogContainer)
	}

	return new Promise((resolve) => {
		const handleClose = (result) => {
			resolve(result)
			cleanup()
		}

		const cleanup = () => {
			root.unmount()
			document.body.removeChild(alertDialogContainer)
			alertDialogContainer = null
		}

		const AlertDialogWrapper = () => {
			const [isOpen, setIsOpen] = useState(true)

			const handleDialogClose = useCallback(
				(result) => {
					setIsOpen(false)
					handleClose(result)
				},
				[handleClose]
			)

			useEffect(() => {
				const handlePopState = () => {
					setIsOpen(false)
					handleClose(false)
				}

				window.addEventListener('popstate', handlePopState)

				return () => {
					window.removeEventListener('popstate', handlePopState)
				}
			}, [handleClose])

			return (
				<AlertDialog
					textOptions={textOptions}
					isOpen={isOpen}
					onClose={handleDialogClose}
					options={{ title, message, type }}
				/>
			)
		}

		const root = createRoot(alertDialogContainer)
		root.render(<AlertDialogWrapper />)
	})
}
