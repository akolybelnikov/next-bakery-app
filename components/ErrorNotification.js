import { Notification, Delete } from 'bloomer'

export default props => (
  <Notification className='slideInDown' isColor='success'>
    <p>{props.notification}</p>
    <Delete onClick={props.dismiss} />
    <style jsx global>{`
      @-webkit-keyframes slideInDown {
        from {
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
          visibility: visible;
        }

        to {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes slideInDown {
        from {
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
          visibility: visible;
        }

        to {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      }

      .slideInDown {
        -webkit-animation-name: slideInDown;
        animation-name: slideInDown;
        position: fixed;
        max-height: 100px;
        width: 320px;
        top: 5.5rem;
        right: 50%;
        margin-right: -160px;
        z-index: 20;
      }
    `}</style>
  </Notification>
)
