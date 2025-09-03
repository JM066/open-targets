import { useMemo, useState } from 'react';
import useLungCarcinomaAssociatedTargets from '../../hooks/useLungCarcinomaAssociatedTargets';
import { arrayToMap } from '../../helpers/arrayHelper';
import TargetTable from '../TargetTable';
import Row from '../Row';
import Column from '../Column';
import Text from '../Text';
import Empty from '../Empty';

function LungCarcinomaTargets() {
	const { data, isLoading, isError, error } = useLungCarcinomaAssociatedTargets();
	const { rows } = data?.disease?.associatedTargets || {};
	const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
	const sortedRow = useMemo(() => rows?.slice().sort((a, b) => b.score - a.score), [rows]);
	const rowsMap = useMemo(
		() =>
			arrayToMap(
				sortedRow ?? [],
				(row) => row.target.id,
				(row) => row.datatypeScores
			),
		[sortedRow]
	);

	if (isLoading) {
		return <div className="loader" />;
	}

	if (isError) {
		throw error || new Error('Failed to load data');
	}

	return (
		<div className="max-w-6xl h-screen">
			{sortedRow?.length ? (
				<>
					<Text
						as="h2"
						size="XLarge"
						boldness="Semibold"
						className="mb-4"
						text="Genes associated with lung carcinoma"
					/>
					<Row>
						<Column />
						<Column>
							<Text text="Approved Symbol" />
						</Column>
						<Column>
							<Text text="Gene Name" />
						</Column>
						<Column>
							<Text text="Overall Association Score" />
						</Column>
					</Row>

					{sortedRow?.map(({ target, score }) => {
						const isSelected = selectedId === target.id;
						return (
							<TargetTable
								key={target.id}
								id={target.id}
								approvedSymbol={target.approvedSymbol}
								approvedName={target.approvedName}
								score={score}
								onSelect={setSelectedId}
								isSelected={isSelected}
								chartData={isSelected ? rowsMap[selectedId] : undefined}
							/>
						);
					})}
				</>
			) : (
				<Empty />
			)}
		</div>
	);
}
export default LungCarcinomaTargets;
