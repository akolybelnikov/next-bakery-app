import {
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardImage,
  Icon,
} from 'bloomer'
import getConfig from 'next/config'
import Image from './Image'
const { publicRuntimeConfig } = getConfig()

export default ({ product }) => (
  <Card>
    <CardImage>
      <figure className='image is-square'>
        <Image
          style={{ minWidth: '100%' }}
          className='progressive-image'
          src={`${publicRuntimeConfig.imagehandler}/400x400/${product.image}`}
          placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
            product.image
          }`}
          alt='product image'
        />
      </figure>
    </CardImage>
    <CardContent
      style={{ minHeight: '6rem' }}
      className='has-text-centered is-size-6'>
      {product.productName}
    </CardContent>
    <CardFooter>
      <CardFooterItem style={{ justifyContent: 'space-around' }}>
        <span>Смотреть все наши новости</span>
        <Icon className='fas fa-chevron-right' />
      </CardFooterItem>
    </CardFooter>
    <style jsx>{`
      :global(img.media-image) {
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
      }
    `}</style>
  </Card>
)
