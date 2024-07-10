'use client'

import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import { MakeReal } from './components/MakeReal'

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, { ssr: false })

function App() {
	return (
		<div className="app">
			<div className="editor">
				<Tldraw persistenceKey="make-real"></Tldraw>
				<MakeReal />
			</div>
			<div className="preview"></div>
		</div>
	)
}

App.editor = Tldraw

export default App
