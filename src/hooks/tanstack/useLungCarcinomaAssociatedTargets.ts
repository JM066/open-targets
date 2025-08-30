import { useQuery } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'

import { gql } from 'graphql-request'
import type { LungCarcinomaAssociatedTargetsQuery } from '../../graphql/generated'

export const GET_DISEASE_ASSOCIATED_TARGETS = gql`
	query lungCarcinomaAssociatedTargets {
		disease(efoId: "EFO_0001071") {
			associatedTargets(page: { index: 0, size: 10 }) {
				rows {
					target {
						id
						approvedSymbol
						approvedName
					}
					score
					datatypeScores {
						id
						score
					}
				}
			}
		}
	}
`

const API_URL = 'https://api.platform.opentargets.org/api/v4/graphql'

const graphqlClient = new GraphQLClient(API_URL)

export default function useLungCarcinomaAssociatedTargets() {
	return useQuery<LungCarcinomaAssociatedTargetsQuery, Error>({
		queryKey: ['lungCarcinomaAssociatedTargets'],
		queryFn: async () => {
			const data = await graphqlClient.request<LungCarcinomaAssociatedTargetsQuery>(GET_DISEASE_ASSOCIATED_TARGETS)
			return data
		},
	})
}
