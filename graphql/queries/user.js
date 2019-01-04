import gql from 'graphql-tag'

const GET_USER = gql(`
    query ($email: String!) {
        getUser(email: $email) {
            email
            avatar
            firstname
            lastname
            dob
            telephone
            votes
        }
    }
  `)

  export default GET_USER