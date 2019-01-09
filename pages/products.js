import { Query } from 'react-apollo'
import Categories from '../components/Categories'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import { LIST_CATEGORIES } from '../graphql/queries/categories'
import { BelowDefault, Default } from '../styles/utils'
import withData from '../withData'

const Products = () => {
  return (
    <Query query={LIST_CATEGORIES}>
      {({ loading, error, data: { listCategories } }) => {
        if (loading) return <LoadingScreen />
        if (error) return <ErrorScreen />
        return <Categories categories={listCategories.items} />
      }}
    </Query>
  )
}

export default withData(Products)
