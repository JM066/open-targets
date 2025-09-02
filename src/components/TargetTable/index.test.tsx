import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TargetTable from './index';

vi.mock('../TargetBarChart', () => ({
	default: ({ data }: { data: { id: string; score: number }[] }) => (
		<div data-testid="bar-chart">Bar Chart: {data?.map((item) => item.id).join(', ')}</div>
	),
}));

const mockProps = {
	id: 'ENSG00000146648',
	approvedSymbol: 'EGFR',
	approvedName: 'epidermal growth factor receptor',
	score: 0.856,
	onSelect: vi.fn(),
	isSelected: false,
	chartData: undefined,
};

describe('TargetTable', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders disease information correctly', () => {
		render(<TargetTable {...mockProps} />);

		expect(screen.getByText('EGFR')).toBeInTheDocument();
		expect(screen.getByText('epidermal growth factor receptor')).toBeInTheDocument();
		expect(screen.getByText('0.856')).toBeInTheDocument();
	});

	it('shows + when not selected or not expanded', () => {
		render(<TargetTable {...mockProps} />);
		expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
	});

	it('shows - when selected and expanded', async () => {
		const user = userEvent.setup();
		const propsWithChartData = {
			...mockProps,
			isSelected: true,
			chartData: [
				{ id: 'literature', score: 0.9993018113820681 },
				{ id: 'known_drug', score: 0.9909887796992535 },
			],
		};
		render(<TargetTable {...propsWithChartData} />);

		const selectButton = screen.getByRole('button', { name: '+' });
		await user.click(selectButton);

		expect(screen.getByText('-')).toBeInTheDocument();
		expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
	});

	it('calls onSelect with correct id when clicked', async () => {
		const user = userEvent.setup();
		const mockOnSelect = vi.fn();

		render(<TargetTable {...mockProps} onSelect={mockOnSelect} />);

		const selectButton = screen.getByRole('button', { name: '+' });
		await user.click(selectButton);

		expect(mockOnSelect).toHaveBeenCalledWith('ENSG00000146648');
		expect(mockOnSelect).toHaveBeenCalledTimes(1);
	});

	it('does not show chart when selected but no chart data', () => {
		render(<TargetTable {...mockProps} isSelected={true} chartData={undefined} />);

		const tabsContainer = screen.queryByTestId('tabs');
		expect(tabsContainer).not.toBeInTheDocument();
		expect(screen.queryByText('Bar Chart: literature, known_drug')).not.toBeInTheDocument();
	});

	it('shows chart section when selected and has bar chart data', () => {
		const propsWithData = {
			...mockProps,
			chartData: [
				{ id: 'literature', score: 0.9993018113820681 },
				{ id: 'known_drug', score: 0.9909887796992535 },
			],
		};
		render(<TargetTable {...propsWithData} isSelected={true} />);

		expect(screen.getByText('Bar Chart: literature, known_drug')).toBeInTheDocument();
	});
});
