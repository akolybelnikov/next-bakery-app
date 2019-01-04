import { Icon, Section } from 'bloomer';

export default () => {
  return (
    <Section
      hasTextColor='primary'
      style={{
        position: 'absolute',
      }}>
      <div>
        <Icon
          className='fas fa-spinner fa-pulse fa-2x'
          style={{ display: 'block' }}
        />
      </div>
    </Section>
  )
}
