import { memo, useMemo } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { formatLabel, clampScores } from '../../helpers/arrayHelper';

interface Props {
	id: string;
	score: number;
}
function TargetRadarChart({ data }: { data: Props[] }) {
	const clamped = useMemo(() => clampScores(data), [data]);

	return (
		<ResponsiveContainer width="100%" height={350}>
			<RadarChart outerRadius={90} data={clamped}>
				<PolarGrid />
				<PolarAngleAxis dataKey="id" tickFormatter={formatLabel} />
				<PolarRadiusAxis angle={30} />
				<Tooltip labelFormatter={formatLabel} />
				<Radar dataKey="score" stroke="#2563eb" strokeWidth={2} fill="#2563eb" fillOpacity={0.1} />
			</RadarChart>
		</ResponsiveContainer>
	);
}
export default memo(TargetRadarChart);
