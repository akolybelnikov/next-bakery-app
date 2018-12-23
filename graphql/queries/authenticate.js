import gql from 'graphql-tag'

const GET_AUTH_STATUS= gql(`
        isAuthenticated @client {
            state
        }
  `)

  export default GET_AUTH_STATUS