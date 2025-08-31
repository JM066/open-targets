import { memo, useCallback } from 'react';
import type { ChartTypeValue } from '../../../types';
import Button from '../../Button';
import Text from '../../Text';

interface Props {
	tabId: string;
	label: string;
	isActive: boolean;
	onTabChange: (tabId: ChartTypeValue) => void;
}

function Tab({ tabId, label, isActive, onTabChange }: Props) {
	const onClick = useCallback(() => {
		onTabChange(tabId as ChartTypeValue);
	}, [onTabChange, tabId]);

	return (
		<Button onClick={onClick} variant={isActive ? 'Primary' : 'Inverted'}>
			<Text text={label} />
		</Button>
	);
}

export default memo(Tab);
