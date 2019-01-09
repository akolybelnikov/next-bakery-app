import { Title, Columns, Column } from 'bloomer'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import LazyLoad from 'react-lazy-load'
import ComponentContainer from '../components/ComponentContainer'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import Product from '../components/Product'
import { GET_CATEGORY } from '../graphql/queries/categories'
import LIST_PRODUCTS from '../graphql/queries/products'
import withData from '../withData'
import { BelowDefault, Default } from '../styles/utils'

const Category = withRouter(({ router }) => (
  <ComponentContainer>
    <Query query={GET_CATEGORY} variables={{ name: router.query.name }}>
      {({ error, data: { getCategory } }) => {
        if (error) {
          console.error(error)
          return <ErrorScreen />
        }
        return (
          <React.Fragment>
            <Title
              hasTextColor='primary'
              className='is-size-6-mobile is-size-4 has-text-centered-mobile'>
              {getCategory.title}
            </Title>
            <Query
              query={LIST_PRODUCTS}
              variables={{
                limit: 250,
                filter: {
                  category: { eq: router.query.name },
                  status: { eq: 'active' },
                },
              }}>
              {({ loading, error, data: { listProducts } }) => {
                if (loading) {
                  return <LoadingScreen />
                }
                if (error) return <ErrorScreen />
                return (
                  <React.Fragment>
                    <BelowDefault>
                      {listProducts &&
                        listProducts.items.map((item, index) => (
                          <LazyLoad
                            key={index}
                            height={100}
                            offsetVertical={200}>
                            <Product product={item} />
                          </LazyLoad>
                        ))}
                    </BelowDefault>
                    <Default>
                      <Columns isMobile isMultiline>
                        {listProducts &&
                          listProducts.items.map((item, index) => (
                            <Column key={index} isSize={{mobile: 6, default: 4}}>
                              <Product product={item} />
                            </Column>
                          ))}
                      </Columns>
                    </Default>
                  </React.Fragment>
                )
              }}
            </Query>
          </React.Fragment>
        )
      }}
    </Query>
  </ComponentContainer>
))

export default withData(Category)
