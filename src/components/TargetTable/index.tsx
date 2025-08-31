import { memo, useCallback, type ReactNode } from 'react';
import Link from '../Link';
import Button from '../Button';
import Column from '../Column';
import Row from '../Row';
import Text from '../Text';

interface Props {
	id: string;
	approvedSymbol: string;
	approvedName: string;
	score: number;
	onSelect?: (id?: string) => void;
	children?: ReactNode;
	className?: string;
	selectedId?: string;
}

function TargetTable(props: Props) {
	const { id, approvedSymbol, approvedName, score, onSelect, children, className, selectedId } = props;
	const isSelected = selectedId === id;

	const select = useCallback(() => {
		onSelect?.(isSelected ? undefined : id);
	}, [isSelected, onSelect, id]);

	return (
		<div className={className}>
			<Row>
				<Button
					variant="Primary"
					size="Small"
					className="flex items-center justify-center text-xl font-bold"
					onClick={select}
				>
					<Text size="Large" boldness="Semibold" text={isSelected ? '-' : '+'} />
				</Button>
				<Column className="relative">
					<Text text={approvedSymbol} />
					<Link location={`https://platform.opentargets.org/target/${id}`} />
				</Column>
				<Column>
					<Text text={approvedName} />
				</Column>
				<Column>
					<Text text={score.toFixed(3)} />
				</Column>
			</Row>
			{children}
		</div>
	);
}
export default memo(TargetTable);
