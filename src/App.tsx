import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex flex-col items-center justify-center h-screen w-screen">
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<h1 className="text-3xl font-bold underline">Vite + React</h1>
				</ErrorBoundary>
			</div>
		</QueryClientProvider>
	)
}

export default App
