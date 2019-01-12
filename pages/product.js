import {
  Column,
  Columns,
  Icon,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFooter,
  ModalClose,
  ModalContent,
} from 'bloomer'
import { withRouter } from 'next/router'
import { Query, Subscription } from 'react-apollo'
import ComponentContainer from '../components/ComponentContainer'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import ProductCardDetails from '../components/ProductCardDetails'
import { GET_PRODUCT } from '../graphql/queries/products'
import { Link } from '../routes'
import withData from '../withData'
import { UPDATE_PRODUCT } from '../graphql/mutations/product'
import { graphql, compose } from 'react-apollo'
import ON_UPDATE_PRODUCT from '../graphql/subscriptions/product'

class Product extends React.Component {
  state = {
    isActive: false,
    currentProduct: null,
  }

  subscription

  componentDidMount() {
    this.subscription = this.props.subscribeToVotes()
  }

  componentWillUnmount() {
    this.subscription()
  }

  onEmptyHeartClick = () => {
    this.setState({ isActive: true })
  }

  render() {
    const {
      isAuthenticated,
      email,
      setProduct,
      product
    } = this.props
    return (
      <ComponentContainer>
        <Columns>
          <Column
            isSize={{ mobile: 12, tablet: 6, default: 4 }}
            isOffset={{ default: 2, tablet: 3 }}>
            <ProductCardDetails
              onEmptyHeartClick={this.onEmptyHeartClick}
              isAuthenticated={isAuthenticated}
              product={product}
              email={email}
            />
          </Column>
        </Columns>
        <Modal isActive={this.state.isActive}>
          <ModalBackground onClick={() => this.setState({ isActive: false })} />
          <ModalContent>
            <ModalCard>
              <ModalCardBody className='has-text-centered'>
                Войдите в приложение, чтобы сохранить продукт
              </ModalCardBody>
              <ModalCardFooter style={{ justifyContent: 'center' }}>
                <Link route='authenticate'>
                  <a
                    className='button is-primary'
                    onClick={() => setProduct(product)}>
                    <span>Вход пользователя</span>
                    <Icon className='fas fa-chevron-right' />
                  </a>
                </Link>
              </ModalCardFooter>
            </ModalCard>
          </ModalContent>
          <ModalClose onClick={() => this.setState({ isActive: false })} />
        </Modal>
        <style jsx>
          {`
            @media screen and (max-width: 768px) {
              :global(.modal-card) {
                max-width: 90%;
              }
            }
          `}
        </style>
      </ComponentContainer>
    )
  }
}

const ProductWithQuery = graphql(GET_PRODUCT, {
  options: props => ({
    variables: {
      productId: props.router.query.id,
      category: props.router.query.category,
    },
  }),
  props: props => ({
    product: props.data.getProduct ? props.data.getProduct : null,
    subscribeToVotes: () =>
      props.data.subscribeToMore({
        document: ON_UPDATE_PRODUCT,
        variables: {
          productId: props.data.getProduct.productId,
          category: props.data.getProduct.category,
        },
        updateQuery: (
          prev,
          {
            subscriptionData: {
              data: { onUpdateProduct },
            },
          },
        ) => {
          const res = {
            ...prev,
            getProduct: {
              ...prev.getProduct,
              upvotes: onUpdateProduct.upvotes,
            },
          }
          return res
        },
      }),
  }),
})(Product)

const ProductWithRouter = withRouter(ProductWithQuery)

export default withData(ProductWithRouter)
