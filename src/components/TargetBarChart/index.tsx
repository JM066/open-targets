import { memo } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

interface Props {
	id: string
	score: number
}
function TargetBarChart({ data }: { data: Props[] }) {
	console.log({ data })
	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="id" angle={-45} textAnchor="end" height={100} fontSize={12} interval={0} />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="score" fill="#2563eb" />
			</BarChart>
		</ResponsiveContainer>
	)
}
export default memo(TargetBarChart)
