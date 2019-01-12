import { Title } from 'bloomer'
import bulmaCarousel from 'bulma-carousel'
import { compose } from 'react-apollo'
import Categories from '../components/Categories'
import ComponentContainer from '../components/ComponentContainer'
import NewsItem from '../components/NewsItem'
import OffersCarousel from '../components/OffersCarousel'
import {
  listCategories,
  listNews,
  listOffers,
} from '../graphql/resolvers/index'
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
  listCategories,
  listOffers,
  listNews,
)(Index)

export default withData(Home)
