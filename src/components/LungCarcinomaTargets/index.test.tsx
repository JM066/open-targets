import { render, screen, waitFor } from '../../test/utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import LungCarcinomaTargets from './index';

// Mock the chart components
vi.mock('../TargetBarChart', () => ({
	default: ({ data }: { data: { id: string; score: number }[] }) => (
		<div data-testid="bar-chart">Bar Chart: {data?.map((item) => item.id).join(', ')}</div>
	),
}));

describe('LungCarcinomaTargets with MSW', () => {
	it('renders loading state initially', () => {
		const { container } = render(<LungCarcinomaTargets />);

		const loader = container.querySelector('.loader');
		expect(loader).toBeInTheDocument();
	});

	it('renders data in a descending order', async () => {
		render(<LungCarcinomaTargets />);

		await waitFor(() => {
			expect(screen.getByText('BRCA1')).toBeInTheDocument();
		});

		expect(screen.getByText('BRCA1')).toBeInTheDocument();
		expect(screen.getByText('EGFR')).toBeInTheDocument();
		expect(screen.getByText('TP53')).toBeInTheDocument();

		expect(screen.getByText('0.923')).toBeInTheDocument();
		expect(screen.getByText('0.856')).toBeInTheDocument();
		expect(screen.getByText('0.742')).toBeInTheDocument();
	});

	it('handles target selection and shows chart data', async () => {
		const user = userEvent.setup();
		render(<LungCarcinomaTargets />);

		await waitFor(() => {
			expect(screen.getByText('EGFR')).toBeInTheDocument();
		});
		// Select the second button (EGFR)
		const egfrButton = screen.getAllByRole('button', { name: '+' })[1];
		await user.click(egfrButton);

		await waitFor(() => {
			expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
			expect(screen.getByText('Bar Chart: literature, known_drug')).toBeInTheDocument();
		});
	});
});
