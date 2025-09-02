import { HttpResponse, graphql } from 'msw';

const mockSuccessResponse = {
	data: {
		disease: {
			associatedTargets: {
				rows: [
					{
						target: {
							id: 'ENSG00000146648',
							approvedSymbol: 'EGFR',
							approvedName: 'epidermal growth factor receptor',
						},
						score: 0.856,
						datatypeScores: [
							{ id: 'literature', score: 0.99 },
							{ id: 'known_drug', score: 0.85 },
						],
					},
					{
						target: {
							id: 'ENSG00000141510',
							approvedSymbol: 'TP53',
							approvedName: 'tumor protein p53',
						},
						score: 0.742,
						datatypeScores: [
							{ id: 'literature', score: 0.88 },
							{ id: 'genetic_association', score: 0.76 },
						],
					},
					{
						target: {
							id: 'ENSG00000012048',
							approvedSymbol: 'BRCA1',
							approvedName: 'BRCA1 DNA repair associated',
						},
						score: 0.923,
						datatypeScores: [
							{ id: 'literature', score: 0.95 },
							{ id: 'known_drug', score: 0.9 },
						],
					},
				],
			},
		},
	},
};

export const handlers = [
	graphql.query('lungCarcinomaAssociatedTargets', () => {
		return HttpResponse.json(mockSuccessResponse);
	}),
];
