/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBets = /* GraphQL */ `
  query GetBets($id: ID!) {
    getBets(id: $id) {
      id
      name
      type
      risk
      return
      outcome
      createdAt
      updatedAt
    }
  }
`;
export const listBetss = /* GraphQL */ `
  query ListBetss(
    $filter: ModelBetsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBetss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        risk
        return
        outcome
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
