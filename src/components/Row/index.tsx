import { memo, type ReactNode } from 'react'

function Row({ children }: { children: ReactNode }) {
	return (
		<div className="overflow-hidden border border-gray-300 grid grid-cols-[48px_minmax(80px,1fr)_minmax(200px,2fr)_minmax(120px,1fr)] divide-x divide-gray-300">
			{children}
		</div>
	)
}

export default memo(Row)
