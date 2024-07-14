import useHistoryState from '../composables/useHistoryState'


export function History() {
	const [state, setState] = useHistoryState()

	function click(html: string) {
		if (!html) return
		// @ts-ignore
		setState((prev) => [...prev, html])
	}

	return (
		<div className="history">
			{state.map((h, i) => (
				<div key={i} onClick={() => click(h)}></div>
			))}
		</div>
	)
}
