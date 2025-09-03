import classNames from 'classnames';
import { memo } from 'react';

export const Boldness = {
	Normal: 'font-normal',
	Medium: 'font-medium',
	Semibold: 'font-semibold',
} as const;

export const Size = {
	Custom: '',
	Small: 'text-sm',
	Medium: 'text-base',
	Large: 'text-lg',
	XLarge: 'text-xl',
} as const;

export interface Props extends React.HTMLAttributes<HTMLElement> {
	text: string | number;
	size?: keyof typeof Size;
	boldness?: keyof typeof Boldness;
	as?: React.ElementType;
	className?: string;
}
function Text(props: Props) {
	const { text, as, size = 'Medium', boldness = 'Normal', className, ...rest } = props;
	const Component = as || 'p';
	return (
		<Component
			className={classNames('overflow-hidden text-ellipsis', Size[size], Boldness[boldness], className)}
			{...rest}
		>
			{text}
		</Component>
	);
}
export default memo(Text);
