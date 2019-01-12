import { Notification, Delete } from 'bloomer'

export default props => (
  <Notification isColor='primary'>
    <p>{props.notification}</p>
    <Delete onClick={props.dismiss} />
    <style jsx>{`
      :global(.notification) {
        position: fixed;
        max-height: 100px;
        width: 320px;
        top: 5.5rem;
        right: 50%;
        margin-right: -160px;
        z-index: 20;
      }
      @media all and (min-width: 768px) {
        :global(.notification) {
          top: 7.5rem;
          width: 640px;
          margin-right: -320px;
        }
      }
    `}</style>
  </Notification>
)
