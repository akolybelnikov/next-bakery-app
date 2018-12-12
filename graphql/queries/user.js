import gql from 'graphql-tag'

export const GET_USER = gql(`
    query ($id: ID!) {
        getUser(id: $id) {
            status
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