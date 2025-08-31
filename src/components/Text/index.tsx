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

function Text(props: {
	text: string | number;
	size?: keyof typeof Size;
	boldness?: keyof typeof Boldness;
	as?: React.ElementType;
	className?: string;
	attributes?: React.HTMLAttributes<HTMLElement>;
}) {
	const { text, as, size = 'Medium', boldness = 'Normal', attributes, className } = props;
	const Component = as || 'p';
	return (
		<Component
			className={classNames('overflow-hidden text-ellipsis', Size[size], Boldness[boldness], className)}
			{...attributes}
		>
			{text}
		</Component>
	);
}
export default memo(Text);
