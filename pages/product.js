import { withRouter } from 'next/router'
import React from 'react'
import { Query } from 'react-apollo'
import ComponentContainer from '../components/ComponentContainer'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import { GET_PRODUCT } from '../graphql/queries/products'
import { BelowDefault, Default } from '../styles/utils'
import withData from '../withData'

const Product = withRouter(({ router }) => {
  return (
    <ComponentContainer>
      {router && <Query
        query={GET_PRODUCT}
        variables={{
          productId: router.query.id,
          category: router.query.category,
        }}>
        {({ loading, error, data: { getProduct } }) => {
          if (loading) {
            return <LoadingScreen />
          }
          if (error) return <ErrorScreen />
          return (
            <React.Fragment>
              <BelowDefault>
                <p>{getProduct.productName}</p>
              </BelowDefault>
              <Default>
                <p>{getProduct.productName}</p>
              </Default>
            </React.Fragment>
          )
        }}
      </Query>}
    </ComponentContainer>
  )
})

export default withData(Product)
