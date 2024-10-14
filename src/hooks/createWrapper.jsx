import { createContext, useContext } from 'react'

const createWrapper = (initialValue) => {
	const Context = createContext(initialValue)

	const Wrapper = ({ value, children }) => {
		return <Context.Provider value={value}>{children}</Context.Provider>
	}

	const useCustomContext = () => {
		const context = useContext(Context)
		if (context === undefined) {
			throw new Error('useCustomContext debe ser usado dentro de un Wrapper')
		}
		return context
	}

	return [Wrapper, useCustomContext]
}

export default createWrapper
