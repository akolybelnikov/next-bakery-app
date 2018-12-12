import graphql from 'graphql-tag'

export const LIST_NEWS =  graphql(`
query {
    listNews (filter: {status: {eq: "active"}}) {
        items {
            id
            content
            image
            createdAt
            status
        }
    }
}
`)