import { memo, useCallback } from 'react'
import Link from '../Link'
import Button from '../Button'
import Column from '../Column'
import Row from '../Row'
import Text from '../Text'

interface Props {
	id: string
	approvedSymbol: string
	approvedName: string
	score: number
	onSelect?: (id: string) => void
}

function TargetTable(props: Props) {
	const { id, approvedSymbol, approvedName, score, onSelect } = props

	const select = useCallback(() => {
		onSelect?.(id)
	}, [onSelect, id])

	return (
		<Row>
			<Button
				variant="Primary"
				size="Small"
				className="flex items-center justify-center text-xl font-bold"
				onClick={select}
			>
				<Text size="Large" boldness="Semibold" text="+" />
			</Button>
			<Column className="relative">
				<Text text={approvedSymbol} />
				<Link location={`https://platform.opentargets.org/target/${id}`} />
			</Column>
			<Column>
				<Text text={approvedName} />
			</Column>
			<Column>
				<Text text={score.toFixed(3)} />
			</Column>
		</Row>
	)
}
export default memo(TargetTable)
