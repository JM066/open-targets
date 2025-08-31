import { memo, useCallback } from 'react';
import type { ReactElement } from 'react';
import Button from '../../Button';
import Text from '../../Text';

interface Props<T> {
	tabId: T;
	label: string;
	isActive: boolean;
	onTabChange: (tabId: T) => void;
	testId?: string;
}

function Tab<T extends string>({ tabId, label, isActive, onTabChange, testId }: Props<T>) {
	const onClick = useCallback(() => {
		onTabChange(tabId);
	}, [onTabChange, tabId]);

	return (
		<Button onClick={onClick} variant={isActive ? 'Primary' : 'Inverted'} data-testid={testId}>
			<Text text={label} />
		</Button>
	);
}

export default memo(Tab) as <T extends string>(props: Props<T>) => ReactElement;
