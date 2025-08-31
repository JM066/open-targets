export const CHART_TYPE = {
	BAR: 'bar',
	RADAR: 'radar',
} as const;

export type ChartType = (typeof CHART_TYPE)[keyof typeof CHART_TYPE];
