import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import DiseaseTargets from './components/DiseaseTargets'
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="container min-h-screen mx-auto">
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<DiseaseTargets />
				</ErrorBoundary>
			</div>
		</QueryClientProvider>
	)
}

export default App
