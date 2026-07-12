import { useState } from 'react'

function useLocalStorage({ key, initialValue }) {
	const [value, setvalue] = useState(() => {
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : initialValue
	})
	const updateValue = (newValue) => {
		setvalue(newValue)
		localStorage.setItem(key, JSON.stringify(newValue))
	}

	return [value, updateValue]
}

export default useLocalStorage