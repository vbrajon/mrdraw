'use client'

import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import { MakeReal } from './components/MakeReal'

export const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, { ssr: false })

export default function App() {
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
