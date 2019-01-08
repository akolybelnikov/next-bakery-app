import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ComponentContainer from '../components/ComponentContainer'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import LIST_PRODUCTS from '../graphql/queries/products'
import withData from '../withData'

const Category = withRouter(({ router }) => (
  <ComponentContainer>
    <Query
      query={LIST_PRODUCTS}
      variables={{
        limit: 250,
        filter: { category: { eq: router.query.name }, status: {eq: 'active'} },
      }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <LoadingScreen />
        }
        if (error) return <ErrorScreen />
        return <div />
      }}
    </Query>
  </ComponentContainer>
))

export default withData(Category)
