import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import DiseaseTargets from './components/DiseaseTargets';
import './App.css';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen min-w-full p-6 flex flex-col items-center justify-center">
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<DiseaseTargets />
				</ErrorBoundary>
			</div>
		</QueryClientProvider>
	);
}

export default App;
