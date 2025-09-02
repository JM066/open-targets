import classNames from 'classnames';
import type { ReactNode } from 'react';

interface Props {
	isExpanded: boolean;
	children: ReactNode;
	className?: string;
}

function Expandable({ isExpanded, children, className }: Props) {
	return (
		<div
			className={classNames(
				'w-full flex flex-col items-center transition-all duration-500 ease-in-out overflow-hidden',
				className,
				{
					'opacity-100 max-h-96 p-4 bg-gray-50 border border-gray-200': isExpanded,
					'opacity-0 max-h-0 p-0 border-0 m-0': !isExpanded,
				}
			)}
		>
			{children}
		</div>
	);
}
export default Expandable;
