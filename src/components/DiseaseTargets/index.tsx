import { useMemo, useState, lazy, Suspense } from 'react';
import useLungCarcinomaAssociatedTargets from '../../hooks/tanstack/useLungCarcinomaAssociatedTargets';
import { arrayToMap } from '../../helpers/arrayHelper';
import { CHART_TYPE } from '../../types';
import type { ChartType } from '../../types';
import TargetTable from '../TargetTable';
import TargetRadarChart from '../TargetRadarChart';
import Tabs from '../Tabs';
import Row from '../Row';
import Column from '../Column';
import Text from '../Text';

const TargetBarChart = lazy(() => import('../TargetBarChart'));
export const ChartTabs = [
	{ id: CHART_TYPE.BAR, label: 'Bar Chart' },
	{ id: CHART_TYPE.RADAR, label: 'Radar Chart' },
];

function DiseaseTargets() {
	const { data, isLoading, isError, error } = useLungCarcinomaAssociatedTargets();
	const { rows } = data?.disease?.associatedTargets || {};
	const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
	const [activeChartType, setActiveChartType] = useState<ChartType>(CHART_TYPE.BAR);
	const sortedRow = useMemo(() => rows?.slice().sort((a, b) => b.score - a.score), [rows]);

	const rowsMap = useMemo(
		() =>
			arrayToMap(
				sortedRow ?? [],
				(row) => row.target.id,
				(row) => row.datatypeScores
			),
		[sortedRow]
	);

	const Chart = activeChartType === CHART_TYPE.BAR ? TargetBarChart : TargetRadarChart;

	if (isLoading) {
		return <div className="loader" />;
	}

	if (isError) {
		throw error || new Error('Failed to load data');
	}

	return (
		<div className="max-w-6xl h-screen">
			<Text as="h2" size="XLarge" boldness="Semibold" className="mb-4" text="Genes associated with lung carcinoma" />
			<Row>
				<Column />
				<Column>
					<Text text="Approved Symbol" />
				</Column>
				<Column>
					<Text text="Gene Name" />
				</Column>
				<Column>
					<Text text="Overall Association Score" />
				</Column>
			</Row>
			{sortedRow?.map(({ target, score }) => (
				<TargetTable
					key={target.id}
					id={target.id}
					approvedSymbol={target.approvedSymbol}
					approvedName={target.approvedName}
					score={score}
					onSelect={setSelectedId}
					selectedId={selectedId}
				>
					{selectedId === target.id && rowsMap[selectedId] && (
						<div className="w-full bg-gray-50 border border-gray-200 p-4 flex flex-col items-center">
							<Tabs<ChartType>
								tabs={ChartTabs}
								activeTabId={activeChartType}
								onTabChange={setActiveChartType}
								className="mb-4"
							/>
							<Suspense fallback={<div className="loader" />}>
								<Chart data={rowsMap[selectedId]} />
							</Suspense>
						</div>
					)}
				</TargetTable>
			))}
		</div>
	);
}
export default DiseaseTargets;
