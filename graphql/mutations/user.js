import gql from 'graphql-tag'

const CREATE_USER = gql(`
    mutation ($input: CreateUserInput!) {
        createUser(input: $input) {
            status
            email
            id
            createdAt
        }
    }
  `)

  export default CREATE_USER