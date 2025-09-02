import { memo, type ReactNode, type ReactElement } from 'react';
import classNames from 'classnames';
import Tab from './Tab';

interface Props<T> {
	tabs: { id: T; label: string }[];
	activeTabId: string;
	onTabChange: (tabId: T) => void;
	className?: string;
	children?: ReactNode;
	'data-testid'?: string;
}

function Tabs<T extends string>({
	tabs,
	activeTabId,
	onTabChange,
	'data-testid': testId = 'tabs-container',
	className,
	children,
}: Props<T>) {
	return (
		<div className={classNames('w-full', className)} data-testid={testId}>
			{tabs.map((tab, i) => (
				<Tab<T>
					key={`${tab.id}_${i}`}
					tabId={tab.id}
					onTabChange={onTabChange}
					isActive={activeTabId === tab.id}
					label={tab.label}
					data-testid={`tab-${tab.id}`}
				/>
			))}
			{children}
		</div>
	);
}

export default memo(Tabs) as <T extends string>(props: Props<T>) => ReactElement;
