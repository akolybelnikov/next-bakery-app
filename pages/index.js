import { Title } from 'bloomer'
import bulmaCarousel from 'bulma-carousel'
import { compose, graphql } from 'react-apollo'
import Categories from '../components/Categories'
import ComponentContainer from '../components/ComponentContainer'
import NewsItem from '../components/NewsItem'
import OffersCarousel from '../components/OffersCarousel'
import { LIST_CATEGORIES } from '../graphql/queries/categories'
import LIST_NEWS from '../graphql/queries/news'
import LIST_OFFERS from '../graphql/queries/offers'
import withData from '../withData'

class Index extends React.Component {
  componentDidMount() {
    bulmaCarousel.attach()
  }

  render() {
    return (
      <ComponentContainer>
        <OffersCarousel offers={this.props.offers} />
        <Categories categories={this.props.categories} />
        <Title
          hasTextColor='primary'
          className='is-size-5-mobile is-size-3 has-text-centered-mobile'>
          Наши новости
        </Title>
        <NewsItem news={this.props.news[0]} />
        <style jsx>
          {`
            :global(h1.title) {
              padding-top: 1.5rem;
            }
          `}
        </style>
      </ComponentContainer>
    )
  }
}

const Home = compose(
  graphql(LIST_OFFERS, {
    options: {
      errorPolicy: 'all',
    },
    props: props => ({
      offers: props.data.listOffers ? props.data.listOffers.items : [],
    }),
  }),
  graphql(LIST_CATEGORIES, {
    options: {
      errorPolicy: 'all',
    },
    props: props => ({
      categories: props.data.listCategories
        ? props.data.listCategories.items
        : [],
    }),
  }),
  graphql(LIST_NEWS, {
    options: {
      errorPolicy: 'all',
    },
    props: props => ({
      news: props.data.listNews
        ? props.data.listNews.items.sort((a, b) => b.createdAt - a.createdAt)
        : [],
    }),
  }),
)(Index)

export default withData(Home)
