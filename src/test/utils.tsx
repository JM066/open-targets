import type { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';

// Helper to create a fresh QueryClient for each test
const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
	const queryClient = createTestQueryClient();
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const renderWithQuery = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
	render(ui, { wrapper: TestWrapper, ...options });

export * from '@testing-library/react';
export { renderWithQuery as render };
