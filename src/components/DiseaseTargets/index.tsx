import { useMemo, useState, lazy, Suspense } from 'react'
import useLungCarcinomaAssociatedTargets from '../../hooks/tanstack/useLungCarcinomaAssociatedTargets'
import { arrayToMap } from '../../helpers/arrayHelper'
import TargetTable from '../TargetTable'
import TargetRadarChart from '../TargetRadarChart'
import Tabs from '../Tabs'

const TargetBarChart = lazy(() => import('../TargetBarChart'))

function DiseaseTargets() {
	const { data, isLoading, isError, error } = useLungCarcinomaAssociatedTargets()
	const { rows } = data?.disease?.associatedTargets || {}
	const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
	const [isBarChartVisible, setIsBarChartVisible] = useState(false)
	const rowsMap = useMemo(
		() =>
			arrayToMap(
				rows ?? [],
				(row) => row.target.id,
				(row) => row.datatypeScores
			),
		[rows]
	)

	console.log('rowsMap', rowsMap, rows)

	const Chart = isBarChartVisible ? TargetBarChart : TargetRadarChart
	if (isLoading) {
		return <div className="loader" />
	}

	if (isError) {
		throw new Error(error?.message || 'Failed to load data')
	}

	return (
		<div className="max-w-6xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-4">Genes associated with lung carcinoma</h2>
			<div className="border border-gray-300 grid grid-cols-[48px_minmax(120px,1fr)_minmax(200px,2fr)_minmax(150px,1fr)] font-bold divide-x divide-gray-300">
				<span className="px-3 py-2"></span>
				<span className="px-3 py-2">
					<p>Approved Symbol</p>
				</span>
				<span className="px-3 py-2">
					<p>Gene Name</p>
				</span>
				<span className="px-3 py-2">
					<p>Overall Association Score</p>
				</span>
			</div>
			{rows?.map(({ target, score }) => (
				<TargetTable
					key={target.id}
					id={target.id}
					approvedSymbol={target.approvedSymbol}
					approvedName={target.approvedName}
					score={score}
					onSelect={setSelectedId}
				/>
			))}
			{selectedId && rowsMap[selectedId] && (
				<div className="flex flex-col outline outline-2 outline-gray-200 p-4 mt-8 rounded-lg">
					<Tabs isBarChartSelected={isBarChartVisible} onBarChartSelect={setIsBarChartVisible} />
					<Suspense fallback={<div className="loader" />}>
						<Chart data={rowsMap[selectedId]} />
					</Suspense>
				</div>
			)}
		</div>
	)
}
export default DiseaseTargets
