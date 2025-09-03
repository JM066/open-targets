import { memo, useCallback, useState, lazy, Suspense, type ReactNode } from 'react';
import { CHART_TYPE } from '../../types';
import type { ChartType } from '../../types';
import Link from '../Link';
import Button from '../Button';
import Column from '../Column';
import Row from '../Row';
import Text from '../Text';
import Expandable from '../Expandable';
import Tabs from '../Tabs';

const TargetBarChart = lazy(() => import('../TargetBarChart'));
const TargetRadarChart = lazy(() => import('../TargetRadarChart'));

const ChartTabs = [
	{ id: CHART_TYPE.BAR, label: 'Bar Chart' },
	{ id: CHART_TYPE.RADAR, label: 'Radar Chart' },
];

interface Props {
	id: string;
	approvedSymbol: string;
	approvedName: string;
	score: number;
	onSelect: (id?: string) => void;
	children?: ReactNode;
	isSelected?: boolean;
	chartData?: { id: string; score: number }[];
}

function TargetTable(props: Props) {
	const { id, approvedSymbol, approvedName, score, onSelect, children, isSelected, chartData } = props;

	const [activeChartType, setActiveChartType] = useState<ChartType>(CHART_TYPE.BAR);
	const [isExpanded, setIsExpanded] = useState(false);

	const select = useCallback(() => {
		onSelect(id);
		setIsExpanded((prev) => !prev);
	}, [onSelect, id]);

	const Chart = activeChartType === CHART_TYPE.BAR ? TargetBarChart : TargetRadarChart;

	return (
		<>
			<Row>
				<Button
					variant="Primary"
					size="Small"
					className="flex items-center justify-center text-xl font-bold"
					onClick={select}
				>
					<Text size="Large" boldness="Semibold" text={isSelected && isExpanded ? '-' : '+'} />
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
			{children}
			{isSelected && chartData && (
				<Expandable isExpanded={isExpanded}>
					<Tabs<ChartType>
						tabs={ChartTabs}
						activeTabId={activeChartType}
						onTabChange={setActiveChartType}
						className="mb-4"
					/>
					<Text data-testid="chart-title" text={`Data Type Scores: ${approvedSymbol} and lung carcinoma`} />
					<Suspense fallback={<div className="loader" />}>
						<Chart data={chartData} />
					</Suspense>
				</Expandable>
			)}
		</>
	);
}
export default memo(TargetTable);
