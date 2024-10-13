import { createContext, useContext } from 'react'

const MethodsContext = createContext()

export const WrapperContext = ({ methods, children }) => {
	return (
		<MethodsContext.Provider value={methods}>
			{children}
		</MethodsContext.Provider>
	)
}

export const useMethodsContext = () => {
	const context = useContext(MethodsContext)
	if (!context) {
		throw new Error(
			'useMethodsContext debe ser usado dentro de un WrapperContext'
		)
	}
	return context
}
