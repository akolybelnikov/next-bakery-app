import gql from 'graphql-tag'

const AUTHENTICATE_USER = gql`
  mutation ($state: Boolean!) {
    isAuthenticated(state: $state) @client
  }
`;
export default AUTHENTICATE_USER 