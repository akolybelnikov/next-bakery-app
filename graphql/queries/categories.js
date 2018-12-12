import graphql from 'graphql-tag'

export const LIST_CATEGORIES =  graphql(`
query {
    listCategories (filter: {status: {eq: "active"}}) {
        items {
            name
            image
            status
            title
        }
    }
}
`)