import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import { useLungCarcinomaAssociatedTargets } from './hooks/tanstack/useLungCarcinomaAssociatedTargets'
import './App.css'

const queryClient = new QueryClient()

function DiseaseTargets() {
	const { data, isLoading, isError, error } = useLungCarcinomaAssociatedTargets()
	const { rows } = data?.disease?.associatedTargets || {}
	console.log({ rows })
	if (isLoading) {
		return <div className="loader" />
	}

	if (isError) {
		throw new Error(error?.message || 'Failed to load data')
	}

	return (
		<div className="max-w-6xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-4">Genes associated with lung carcinoma</h2>
			<div className="border border-solid-1 grid grid-cols-4 font-bold divide-x">
				<div></div>
				<div>Approved Symbol</div>
				<div>Gene Name</div>
				<div>Overall Association Score</div>
			</div>
			{rows?.map(({ target, score }) => (
				<div key={target.id} className="border grid grid-cols-4 divide-x">
					<div className="flex items-center justify-center">
						<a
							href={`https://platform.opentargets.org/target/${target.id}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 cursor-pointer text-xl font-bold"
						>
							+
						</a>
					</div>
					<div>
						<p>{target.approvedSymbol}</p>
					</div>
					<div>
						<p>{target.approvedName}</p>
					</div>
					<div>
						<p>{score.toFixed(3)}</p>
					</div>
				</div>
			))}
		</div>
	)
}

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen ">
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<div className="container mx-auto">
						<DiseaseTargets />
					</div>
				</ErrorBoundary>
			</div>
		</QueryClientProvider>
	)
}

export default App
