import { Notification, Delete } from 'bloomer'

export default props => (
  <Notification className='slideInDown' isColor='primary'>
    <p>{props.notification}</p>
    <Delete onClick={props.dismiss} />
    <style jsx global>{`
      .slideInDown {
        position: fixed;
        max-height: 100px;
        width: 320px;
        top: 5.5rem;
        right: 50%;
        margin-right: -160px;
        z-index: 20;
      }
      @media all and (min-width: 768px) {
        .slideInDown {
          top: 7.5rem;
          width: 640px;
          margin-right: -320px;
        }
      }
    `}</style>
  </Notification>
)
