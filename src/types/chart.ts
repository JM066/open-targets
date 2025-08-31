export const ChartType = {
	BAR: 'bar',
	RADAR: 'radar',
} as const;

export type ChartTypeValue = (typeof ChartType)[keyof typeof ChartType];
