import classNames from 'classnames';
import { memo, type ReactNode, type HTMLAttributes } from 'react';

const Variant = {
	Primary: 'text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 hover:border-blue-700',
	Inverted: 'text-blue-600 bg-white border border-blue-600 hover:bg-blue-50',
	Clean: 'bg-white text-blue-600',
	Custom: '',
} as const;

const Size = {
	Small: 'w-12 px-3 py-2',
	Medium: 'w-32 px-4 py-2',
	Large: 'w-48 px-6 py-2',
} as const;

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	variant?: keyof typeof Variant;
	size?: keyof typeof Size;
	type?: 'button' | 'submit' | 'reset';
	isLoading?: boolean;
	onClick?: () => void;
}

function Button(props: Props) {
	const {
		children,
		variant = 'Primary',
		size = 'Medium',
		type = 'button',
		isLoading = false,
		onClick,
		className,
		...rest
	} = props;

	return (
		<button
			className={classNames(
				'cursor-pointer transition-colors duration-200 focus:outline-none',
				Variant[variant],
				Size[size],
				className
			)}
			onClick={onClick}
			type={type}
			{...rest}
		>
			{isLoading ? <span className="inline-block">Loading...</span> : children}
		</button>
	);
}

export default memo(Button);
