import gql from 'graphql-tag'

const LIST_PRODUCTS = gql(`
    query listProducts(
        $filter: TableProductFilterInput
        $limit: Int
      ) {
        listProducts (filter: $filter, limit: $limit) {
            items {
                productId
                category
                image
                weight
                price
                sorts
                upvotes
                comments
                productName
                content
                ingridients
                status
            }
        }
    }
`)

export default LIST_PRODUCTS
