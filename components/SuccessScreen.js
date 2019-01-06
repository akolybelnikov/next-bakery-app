import { Icon, Section } from 'bloomer'

export default () => {
  return (
    <Section className="success-root" hasTextColor='primary'>
      <div>
        <Icon className='fas fa-thumbs-up fa-2x' />
      </div>
      <style jsx>
        {`
          section :global(.success-root) {
            position: absolute; 
          }
        `}
      </style>
    </Section>
  )
}
