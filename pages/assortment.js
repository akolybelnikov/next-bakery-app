import { Query } from 'react-apollo'
import CategoryWithProducts from '../components/CategoryWithProducts'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import { LIST_CATEGORIES } from '../graphql/queries/categories'
import { LIST_PRODUCTS } from '../graphql/queries/products'
import withData from '../withData'

const Products = () => {
  return (
    <Query query={LIST_CATEGORIES}>
      {({ loading, error, data: { listCategories } }) => {
        if (loading) return <LoadingScreen />
        if (error) return <ErrorScreen />
        return (
          <React.Fragment>
            {listCategories.items &&
              listCategories.items.map((category, index) => (
                <Query
                  key={index}
                  query={LIST_PRODUCTS}
                  variables={{
                    limit: 250,
                    filter: {
                      category: { eq: category.name },
                      status: { eq: 'active' },
                    },
                  }}>
                  {({ loading, error, data: { listProducts } }) => {
                    if (loading) {
                      return <LoadingScreen />
                    }
                    if (error) {
                      console.error(error)
                      return <ErrorScreen />
                    }
                    return (
                      <CategoryWithProducts
                        key={index}
                        category={category}
                        products={listProducts.items.splice(0, 8)}
                      />
                    )
                  }}
                </Query>
              ))}
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default withData(Products)
