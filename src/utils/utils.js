export const objectToArray = (values) => {
	return Object.entries(values).map(([key, value]) => {
		return {
			key,
			...value
		}
	})
}