import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { placeholder } from '../helper'
import { AlertDialog } from './AlertDialog'

const DEFAULT_TEXT_OPTIONS = {
  cancelText: 'Cancel',
  confirmText: 'Confirm'
}

const AlertDialogContext = createContext()

export const AlertDialogProvider = ({
  children,
  textOptions = DEFAULT_TEXT_OPTIONS
}) => {
  const [options, setOptions] = useState(placeholder)
  const [isOpen, setIsOpen] = useState(false)
  const [resolve, setResolve] = useState(null)

  const alertDialogHandler = useCallback(
    ({
      title = placeholder.title,
      message = placeholder.message,
      type = placeholder.type
    } = {}) => {
      setOptions({ title, message, type })
      return new Promise((resolve) => {
        setIsOpen(true)
        setResolve(() => resolve)
        if (!window.history.state?.modalOpened) {
          window.history.pushState({ modalOpened: true }, window.location.href)
        }
      })
    },
    []
  )

  const handleDialogClose = (result) => {
    if (resolve) resolve(result)
    setIsOpen(false)
    setResolve(null)
  }

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        handleDialogClose(false)
        window.history.back()
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isOpen])

  return (
    <AlertDialogContext.Provider value={{ alertDialogHandler }}>
      {children}
      <AlertDialog
        textOptions={textOptions}
        isOpen={isOpen}
        onClose={handleDialogClose}
        options={options}
      />
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
