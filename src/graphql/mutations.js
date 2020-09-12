/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBets = /* GraphQL */ `
  mutation CreateBets(
    $input: CreateBetsInput!
    $condition: ModelBetsConditionInput
  ) {
    createBets(input: $input, condition: $condition) {
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
export const updateBets = /* GraphQL */ `
  mutation UpdateBets(
    $input: UpdateBetsInput!
    $condition: ModelBetsConditionInput
  ) {
    updateBets(input: $input, condition: $condition) {
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
export const deleteBets = /* GraphQL */ `
  mutation DeleteBets(
    $input: DeleteBetsInput!
    $condition: ModelBetsConditionInput
  ) {
    deleteBets(input: $input, condition: $condition) {
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
