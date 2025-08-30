import { memo } from 'react'
import Button from '../Button'

interface Props {
	isBarChartSelected: boolean
	onBarChartSelect: (isBarChart: boolean) => void
}

function Tabs({ isBarChartSelected, onBarChartSelect }: Props) {
	const onBarChartClick = () => {
		onBarChartSelect(true)
	}

	const onRadarChartClick = () => {
		onBarChartSelect(false)
	}

	return (
		<div className="flex flex-row mb-4 justify-start items-start">
			<Button onClick={onBarChartClick} color={isBarChartSelected ? 'Primary' : 'Inverted'}>
				Bar Chart
			</Button>
			<Button onClick={onRadarChartClick} color={!isBarChartSelected ? 'Primary' : 'Inverted'}>
				Radar Chart
			</Button>
		</div>
	)
}

export default memo(Tabs)
