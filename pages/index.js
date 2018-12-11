import React from 'react'
import styled from 'styled-components'
import withData from '../withData'
import { Query } from 'react-apollo'
import LIST_OFFERS from '../graphql/queries/offers'
import '../styles/styles.scss'

const Title = styled.h1`
  line-height: 1.5rem;
  color: ${props => props.theme.primary};
`

class Home extends React.Component {
  render() {
    return (
      <>
        <Title className="example">My page</Title>
        <Offers />
      </>
    )
  }
}

const Offers = () => {
  return (
    <Query query={LIST_OFFERS} fetchPolicy="cache-and-network" errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading)
          return null
        if (error)
          return null
        if (data) {
          return (
            <>
              {data.listOffers.items.length && data
                .listOffers
                .items
                .map(offer => (
                  <p key={offer.id}>{offer.content}</p>
                ))}
            </>
          )
        }
      }}
    </Query>
  )
}

export default withData(Home)
