import { memo } from 'react';
import type { ChartTypeValue } from '../../types';
import classNames from 'classnames';
import Tab from './Tab';

interface Tab {
	id: string;
	label: string;
}

interface Props {
	tabs: Tab[];
	activeTabId: ChartTypeValue;
	onTabChange: (tabId: ChartTypeValue) => void;
	className?: string;
}

function Tabs({ tabs, activeTabId, onTabChange, className }: Props) {
	return (
		<div className={classNames('w-full', className)}>
			{tabs.map((tab) => (
				<Tab
					key={tab.id}
					tabId={tab.id}
					onTabChange={onTabChange}
					isActive={activeTabId === tab.id}
					label={tab.label}
				/>
			))}
		</div>
	);
}

export default memo(Tabs);
