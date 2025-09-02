import { memo } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

interface Props {
	id: string;
	score: number;
}
function TargetRadarChart({ data }: { data: Props[] }) {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<RadarChart outerRadius={90} data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="id" />
				<PolarRadiusAxis angle={30} domain={[0, 1]} />
				<Radar dataKey="score" stroke="#2563eb" strokeWidth={2} fill="#2563eb" fillOpacity={0.1} />
			</RadarChart>
		</ResponsiveContainer>
	);
}
export default memo(TargetRadarChart);
