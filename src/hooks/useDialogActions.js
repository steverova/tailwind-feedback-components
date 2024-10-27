import { useState } from 'react'

/**
 * Custom hook that provides functionality to control the state of a dialog (open/close).
 * 
 * @returns {[open, onClose, onOpen]} - An array with the following elements:
 * - **open (boolean, index 0):** Indicates whether the dialog is open (`true`) or closed (`false`).
 * - **onClose (function, index 1):** Function to close the dialog.
 * - **onOpen (function, index 2):** Function to open the dialog.
 */
export const useDialogAction = () => {
	const [open, setOpen] = useState(false)

	/**
	 * Closes the dialog by setting `open` to `false`.
	 */
	const onClose = () => {
		setOpen(false)
	}

	/**
	 * Opens the dialog by setting `open` to `true`.
	 */
	const onOpen = () => {
		setOpen(true)
	}

	return [open, onClose, onOpen]
}
