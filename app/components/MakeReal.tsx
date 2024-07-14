import useHistoryState from '../composables/useHistoryState'
import { useEditor, useToasts } from '@tldraw/tldraw'
import { useCallback } from 'react'
import { makeReal } from '../lib/makeReal'

export function MakeReal() {
	// const editor = useEditor()
	const { addToast } = useToasts()
	const [value, setValue] = useHistoryState()

	const handleClick = useCallback(async () => {
		try {
			// const input = document.getElementById('openai_key_risky_but_cool') as HTMLInputElement
			// const apiKey = input?.value ?? null
			// if (!apiKey) throw Error('Make sure the input includes your API Key!')
			const apiKey = 'sk-proj-qw5KUKPW0zsEG1aUGizST3BlbkFJBGn0YFc2cWsozgknoHv9'
			const html = await makeReal(window.editor, apiKey)
			// @ts-ignore
			setValue((prev) => [...prev, html])
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
