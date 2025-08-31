import type { FallbackProps } from 'react-error-boundary';
import Text from '../Text';
import Button from '../Button';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	const statusCode = error?.response?.status;
	const isNetworkError = error?.code === 'NETWORK_ERROR' || error?.name === 'NetworkError';
	const isGraphQLError = error?.message?.includes('GraphQL Error') || error?.request?.query;

	let errorMessage = 'An unexpected error occurred';

	if (isGraphQLError) {
		if (statusCode === 404) {
			errorMessage = 'The requested data endpoint was not found. Please check if the service is available.';
		} else if (statusCode >= 500) {
			errorMessage = 'The server is currently experiencing issues. Please try again later.';
		} else if (statusCode === 400) {
			errorMessage = 'There was an issue with the data request. Please try again.';
		} else {
			errorMessage = 'Unable to fetch the requested data.';
		}
	} else {
		errorMessage = error?.message || errorMessage;
	}

	return (
		<div role="alert" className="max-w-6xl mx-auto p-6 flex justify-center items-center min-h-64">
			<div className="text-center">
				<Text as="h2" size="XLarge" boldness="Semibold" className="mb-4" text="Something went wrong" />

				<div className="mb-4 text-gray-700">
					{isNetworkError ? (
						<Text text="Unable to connect to the server. Please check your internet connection." />
					) : statusCode ? (
						<Text text={`Server error (${statusCode}): ${errorMessage}`} />
					) : (
						<Text text={errorMessage} />
					)}
				</div>

				{statusCode && <Text size="Small" className="mb-4 text-gray-500" text={`Error code: ${statusCode}`} />}

				<Button type="button" onClick={resetErrorBoundary} className="rounded-md">
					<Text text="Try again" />
				</Button>
			</div>
		</div>
	);
}
export default ErrorFallback;
