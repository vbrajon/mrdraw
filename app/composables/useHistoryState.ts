import { useState, useEffect } from 'react'

const dummyHistory = [
	``,
	`<h1>History 1</h1>`,
	`<h1>History 2</h1>`,
	`<h1>History 3</h1>`,
	`<h1>History 4</h1>`,
	`<h1>History 5</h1>`,
	`<h1>History 6</h1>`,
	`<h1>History 7</h1>`,
	`<h1>History 8</h1>`,
]

const useLocalStorageState = (key = 'history', defaultValue = dummyHistory) => {
	const [state, setState] = useState(() => {
		if (typeof window === 'undefined') return defaultValue
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : defaultValue
	})

	useEffect(() => {
		if (typeof window === 'undefined') return
		localStorage.setItem(key, JSON.stringify(state))
		// @ts-ignore
		document.querySelector('.preview iframe').srcdoc = state.at(-1)
	}, [key, state])

	return [state, setState] as [string[], (state: string[]) => string[]]
}

export default useLocalStorageState
