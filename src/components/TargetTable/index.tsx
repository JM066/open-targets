import { memo } from 'react'
import Link from '../Link'

interface Props {
	id: string
	approvedSymbol: string
	approvedName: string
	score: number
	onSelect?: (id: string) => void
}

function TargetTable(props: Props) {
	const { id, approvedSymbol, approvedName, score, onSelect } = props

	const select = () => {
		onSelect?.(id)
	}

	return (
		<div
			className="cursor-pointer border border-gray-300 grid grid-cols-[48px_minmax(120px,1fr)_minmax(200px,2fr)_minmax(150px,1fr)] divide-x divide-gray-300"
			onClick={select}
		>
			<span className="flex items-center justify-center px-3 py-2">
				<Link location={`https://platform.opentargets.org/target/${id}`}>+</Link>
			</span>
			<span className="px-3 py-2">
				<p>{approvedSymbol}</p>
			</span>
			<span className="px-3 py-2">
				<p>{approvedName}</p>
			</span>
			<span className="px-3 py-2">
				<p>{score.toFixed(3)}</p>
			</span>
		</div>
	)
}
export default memo(TargetTable)
