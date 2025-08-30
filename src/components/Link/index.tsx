import { memo, type ReactNode } from 'react'

function Link({ location, children }: { location: string; children: ReactNode }) {
	return (
		<a
			href={location}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-600 hover:text-blue-700 cursor-pointer text-xl font-bold"
		>
			{children}
		</a>
	)
}
export default memo(Link)
