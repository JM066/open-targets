import { memo, useCallback } from 'react';
import Button from '../Button';
import Text from '../Text';

interface Props {
	isBarChartSelected: boolean;
	onBarChartSelect: (isBarChart: boolean) => void;
}

function Tabs({ isBarChartSelected, onBarChartSelect }: Props) {
	const onBarChartClick = useCallback(() => {
		onBarChartSelect(true);
	}, [onBarChartSelect]);

	const onRadarChartClick = useCallback(() => {
		onBarChartSelect(false);
	}, [onBarChartSelect]);

	return (
		<div className="w-full flex flex-row mb-4 justify-start items-start overflow-hidden">
			<Button onClick={onBarChartClick} variant={isBarChartSelected ? 'Primary' : 'Inverted'}>
				<Text text="Bar Chart" />
			</Button>
			<Button onClick={onRadarChartClick} variant={!isBarChartSelected ? 'Primary' : 'Inverted'}>
				<Text text="Radar Chart" />
			</Button>
		</div>
	);
}

export default memo(Tabs);
