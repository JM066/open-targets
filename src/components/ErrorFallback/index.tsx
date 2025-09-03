import type { FallbackProps } from 'react-error-boundary';
import Text from '../Text';
import Button from '../Button';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	const statusCode = error?.response?.status;

	return (
		<div role="alert" className="max-w-6xl mx-auto p-6 flex justify-center items-center min-h-64">
			<div className="text-center">
				<Text as="h2" size="XLarge" boldness="Semibold" className="mb-4" text="Something went wrong" />
				{statusCode && <Text size="Small" className="mb-4 text-gray-500" text={`Error code: ${statusCode}`} />}
				<Button type="button" onClick={resetErrorBoundary} className="rounded-md">
					<Text text="Try again" />
				</Button>
			</div>
		</div>
	);
}
export default ErrorFallback;
