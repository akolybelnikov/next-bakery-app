import { Section } from 'bloomer'
import withData from '../withData'
import { withRouter } from 'next/router'

const Category = withRouter(props => (
  <Section>
    <p>{props.router.query.name}</p>
  </Section>
))

export default withData(Category)
