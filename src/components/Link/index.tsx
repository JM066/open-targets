import { memo } from 'react'
import classNames from 'classnames'

function Link({ location, className }: { location: string; className?: string }) {
	return (
		<a
			href={location}
			target="_blank"
			rel="noopener noreferrer"
			className={classNames('absolute apacity-0 inset-0 z-10 cursor-pointer', className)}
		/>
	)
}
export default memo(Link)
