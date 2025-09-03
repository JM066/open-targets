import { memo } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { formatLabel } from '../../helpers/arrayHelper';

interface Props {
	id: string;
	score: number;
}
function TargetBarChart({ data }: { data: Props[] }) {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="id"
					angle={-45}
					textAnchor="end"
					height={100}
					fontSize={12}
					interval={0}
					tickFormatter={formatLabel}
				/>
				<YAxis />
				<Tooltip labelFormatter={formatLabel} />
				<Legend />
				<Bar dataKey="score" fill="#2563eb" />
			</BarChart>
		</ResponsiveContainer>
	);
}
export default memo(TargetBarChart);
