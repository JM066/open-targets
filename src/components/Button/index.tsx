import { memo, type ReactNode } from 'react'

export const Color = {
	Primary: 'text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 hover:border-blue-700',
	Inverted: 'text-blue-600 bg-white border border-blue-600 hover:bg-blue-50',
	Clean: 'bg-white border border-gray-200 text-blue-600 hover:bg-gray-50',
	Custom: '',
} as const

export interface Props {
	children?: ReactNode
	className?: string
	color?: keyof typeof Color
	type?: 'button' | 'submit' | 'reset'
	isLoading?: boolean
	onClick?: () => void
}

function Button(props: Props) {
	const { children, color = 'Primary', type = 'button', isLoading = false, onClick } = props

	const colorClasses = Color[color]

	return (
		<button
			className={`px-4 py-2 w-32 cursor-pointer transition-colors duration-200 focus:outline-none ${colorClasses}`}
			onClick={onClick}
			type={type}
		>
			{isLoading ? <span className="inline-block">Loading...</span> : children}
		</button>
	)
}

export default memo(Button)
