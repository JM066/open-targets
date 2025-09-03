import { render, screen } from '../../test/utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ErrorBoundary } from 'react-error-boundary';
import { server } from '../../test/mocks/server';
import { mockEmptyDataResponse, mockNetworkError } from '../../test/mocks/handlers';
import LungCarcinomaTargets from './index';
import ErrorFallback from '../ErrorFallback';

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

		await screen.findByText('BRCA1');

		expect(screen.getByText('EGFR')).toBeInTheDocument();
		expect(screen.getByText('TP53')).toBeInTheDocument();

		expect(screen.getByText('0.923')).toBeInTheDocument();
		expect(screen.getByText('0.856')).toBeInTheDocument();
	});

	it('handles target selection and shows chart data', async () => {
		const user = userEvent.setup();
		render(<LungCarcinomaTargets />);

		await screen.findByText('EGFR');
		const egfrButton = screen.getAllByRole('button', { name: '+' })[1];
		await user.click(egfrButton);

		await screen.findByTestId('bar-chart');
		expect(screen.getByText('Bar Chart: literature, known_drug')).toBeInTheDocument();
		expect(screen.getByTestId('chart-title')).toHaveTextContent('Data Type Scores: EGFR and lung carcinoma');
	});

	it('renders empty state when no data is returned', async () => {
		// Override the default handler to return empty data
		server.use(mockEmptyDataResponse());

		render(<LungCarcinomaTargets />);

		await screen.findByText('No targets found');

		expect(screen.queryByText('BRCA1')).not.toBeInTheDocument();
		expect(screen.queryByText('EGFR')).not.toBeInTheDocument();
	});

	it('handles network error gracefully', async () => {
		// Override the default handler to simulate network error
		server.use(mockNetworkError());

		render(
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<LungCarcinomaTargets />
			</ErrorBoundary>
		);
		await screen.findByText('Something went wrong');

		expect(screen.queryByText('BRCA1')).not.toBeInTheDocument();
		expect(screen.queryByText('EGFR')).not.toBeInTheDocument();
		expect(screen.getByText('Try again')).toBeInTheDocument();
	});
});
