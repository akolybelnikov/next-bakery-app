import graphql from 'graphql-tag'

const LIST_CATEGORIES =  graphql(`
query {
    listCategories (filter: {status: {eq: "active"}}) {
        items {
            name
            image
            title
        }
    }
}
`)

export default LIST_CATEGORIES