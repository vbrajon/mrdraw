import { useEditor, useToasts } from '@tldraw/tldraw'
import { useCallback } from 'react'
import { makeReal } from '../lib/makeReal'
import App from '../page'

export function MakeReal() {
	// const editor = useEditor()
	const { addToast } = useToasts()

	const handleClick = useCallback(async () => {
		try {
			// const input = document.getElementById('openai_key_risky_but_cool') as HTMLInputElement
			// const apiKey = input?.value ?? null
			// if (!apiKey) throw Error('Make sure the input includes your API Key!')
			const apiKey = 'sk-proj-eKOXOfKTpJhHRtpav7qST3BlbkFJDyGHcjqcud1dHH5ZcfKJ'
			await makeReal(App.editor as any, apiKey)
		} catch (e) {
			console.error(e)
			addToast({
				icon: 'cross-2',
				title: 'Something went wrong',
				description: (e as Error).message.slice(0, 100),
			})
		}
	}, [addToast])

	return (
		<div className="makeReal">
			{/* <input type="text" /> */}
			<button onClick={handleClick}>Make Real</button>
		</div>
	)
}
