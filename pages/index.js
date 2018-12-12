import React, { Fragment } from 'react'
import styled from 'styled-components'
import withData from '../withData'
import { Query } from 'react-apollo'
import { LIST_OFFERS } from '../graphql/queries/offers'
import '../styles/index.scss'

const Title = styled.h1`
  line-height: 1.5rem;
  
`

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Title className="example has-text-primary">My page</Title>
        <div className="has-text-success is-size-5"><Offers /></div>
      </Fragment>
    )
  }
}

const Offers = () => {
  return (
    <Query query={LIST_OFFERS} fetchPolicy="cache-first" errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading)
          return null
        if (error)
          return null
        if (data) {
          return (
            <Fragment>
              {data.listOffers.items.length && data
                .listOffers
                .items
                .map(offer => (
                  <p key={offer.id}>{offer.content}</p>
                ))}
            </Fragment>
          )
        }
      }}
    </Query>
  )
}

export default withData(Home)
