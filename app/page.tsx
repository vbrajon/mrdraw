'use client'

import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import { MakeReal } from './components/MakeReal'

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, { ssr: false })

declare global {
	interface Window {
		editor: any
	}
}

export default function App() {
	return (
		<div className="app">
			<div className="editor">
				<Tldraw
					persistenceKey="make-real"
					onMount={(editor) => ((window.editor = editor), undefined)}
				></Tldraw>
				<MakeReal />
			</div>
			<div className="preview"></div>
		</div>
	)
}
