type Key = string | number;

export function arrayToMap<TItem, TKey extends Key, TValue>(
	array: TItem[],
	keyResolver: (item: TItem, index: number) => TKey,
	valueResolver: (item: TItem, index: number) => TValue
): Record<TKey, TValue> {
	const result = {} as Record<TKey, TValue>;
	for (let index = 0; index < array.length; index++) {
		const item = array[index];
		result[keyResolver(item, index)] = valueResolver(item, index);
	}
	return result;
}
function firstUpperCase(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function formatDataTypeLabel(label: string): string {
	return label.split('_').map(firstUpperCase).join(' ');
}

export function formatLabel(label: string): string {
	return label.includes('_') ? formatDataTypeLabel(label) : firstUpperCase(label);
}

export function clampScores<T extends { score: number }>(data: T[], maxScore: number = 1.0): T[] {
	return data.map((item) => ({
		...item,
		score: Math.min(item.score, maxScore),
	}));
}
