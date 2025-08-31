import classNames from 'classnames';
import { memo, type ReactNode } from 'react';

function Column({ children, className }: { children?: ReactNode; className?: string }) {
	return <span className={classNames('px-3 py-2 inline-flex', className)}>{children}</span>;
}

export default memo(Column);
