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
		<div className="border border-gray-300 grid grid-cols-4 divide-x divide-gray-300" onClick={select}>
			<span className="flex items-center justify-center w-12">
				<Link location={`https://platform.opentargets.org/target/${id}`}>+</Link>
			</span>
			<span>
				<p>{approvedSymbol}</p>
			</span>
			<span>
				<p>{approvedName}</p>
			</span>
			<span>
				<p>{score.toFixed(3)}</p>
			</span>
		</div>
	)
}
export default memo(TargetTable)
