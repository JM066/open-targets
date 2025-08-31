import { useMemo, useState, lazy, Suspense } from 'react';
import useLungCarcinomaAssociatedTargets from '../../hooks/tanstack/useLungCarcinomaAssociatedTargets';
import { arrayToMap } from '../../helpers/arrayHelper';
import { ChartType } from '../../types';
import type { ChartTypeValue } from '../../types';
import TargetTable from '../TargetTable';
import TargetRadarChart from '../TargetRadarChart';
import Tabs from '../Tabs';
import Row from '../Row';
import Column from '../Column';
import Text from '../Text';

const TargetBarChart = lazy(() => import('../TargetBarChart'));

function DiseaseTargets() {
	const { data, isLoading, isError, error } = useLungCarcinomaAssociatedTargets();
	const { rows } = data?.disease?.associatedTargets || {};
	const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
	const [activeChartType, setActiveChartType] = useState<ChartTypeValue>(ChartType.BAR);
	const rowsMap = useMemo(
		() =>
			arrayToMap(
				rows ?? [],
				(row) => row.target.id,
				(row) => row.datatypeScores
			),
		[rows]
	);

	const Chart = activeChartType === ChartType.BAR ? TargetBarChart : TargetRadarChart;
	if (isLoading) {
		return <div className="loader" />;
	}

	if (isError) {
		console.log('error', error);
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
			{rows?.map(({ target, score }) => (
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
							<Tabs
								tabs={[
									{ id: ChartType.RADAR, label: 'Radar Chart' },
									{ id: ChartType.BAR, label: 'Bar Chart' },
								]}
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
