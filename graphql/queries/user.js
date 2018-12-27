import gql from 'graphql-tag'

const GET_USER = gql(`
    query ($id: String!) {
        getUser(id: $id) {
            email
            id
            avatar
            firstname
            lastname
            dob
            telephone
            votes
            createdAt
        }
    }
  `)

  export default GET_USER