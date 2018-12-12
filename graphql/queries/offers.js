import gql from 'graphql-tag'

export const LIST_OFFERS = gql(`
    query {
        listOffers (filter: {status: {eq: "active"}}) {
            items {
                id
                content
                image
                status
            }
        }
    }
`)