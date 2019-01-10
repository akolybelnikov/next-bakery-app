import { Column, Columns, Title } from 'bloomer'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import LazyLoad from 'react-lazy-load'
import ComponentContainer from '../components/ComponentContainer'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import Product from '../components/Product'
import { GET_CATEGORY } from '../graphql/queries/categories'
import { LIST_PRODUCTS } from '../graphql/queries/products'
import { BelowDefault, Default } from '../styles/utils'
import withData from '../withData'

const Category = withRouter(({ router }) => {
  return (
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
                              <Link
                                as={`/products/${item.category}/${
                                  item.productId
                                }`}
                                href={`/products?category=${item.category};id=${
                                  item.productId
                                }`}>
                                <a>
                                  <Product product={item} />
                                </a>
                              </Link>
                            </LazyLoad>
                          ))}
                      </BelowDefault>
                      <Default>
                        <Columns isMobile isMultiline>
                          {listProducts &&
                            listProducts.items.map((item, index) => (
                              <Column
                                key={index}
                                isSize={{ mobile: 6, default: 4 }}>
                                <Link
                                  as={`/products/${item.category}/${
                                    item.productId
                                  }`}
                                  href={`/products?category=${
                                    item.category
                                  };id=${item.productId}`}>
                                  <a>
                                    <Product product={item} />
                                  </a>
                                </Link>
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
  )
})

export default withData(Category)
