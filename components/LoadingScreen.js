import { Icon, Section } from 'bloomer'
import SpinningCircles from './SVG/SpinningCircles'

export default () => {
  return (
    <Section
      style={{
        minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        maxWidth: '60vw',
        margin: '0 auto',
      }}
      className='has-text-centered'>
      <div>
        <SpinningCircles width="100" heigh="100" fill="rgba(82, 8, 45, 0.3)" />
        />
      </div>
    </Section>
  )
}
