import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardImage,
  Icon,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
} from 'bloomer'
import getConfig from 'next/config'
import { BelowDefault, Default } from '../styles/utils'
import Image from './Image'
const { publicRuntimeConfig } = getConfig()

export default ({ product }) => {
  console.log(product)
  return (
    <React.Fragment>
      <BelowDefault>
        <Media style={{ alignItems: 'center' }}>
          <MediaLeft>
            <figure className='image product-media'>
              <Image
                style={{ minWidth: '100%' }}
                className='progressive-image media-image'
                src={`${publicRuntimeConfig.imagehandler}/200x200/${
                  product.image
                }`}
                placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                  product.image
                }`}
                alt='product image'
              />
            </figure>
          </MediaLeft>
          <MediaContent>
            <p>{product.productName}</p>
            <p
              className='is-size-7 has-text-primary'
              style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Вес: {product.weight && product.weight}</span>|
              <span>Цена: {product.price && product.price} руб.</span>
            </p>
          </MediaContent>
          <MediaRight
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}>
            <Button isColor='primary' style={{ margin: '0 10px' }}>
              <Icon className='fas fa-arrow-right' />
            </Button>
          </MediaRight>
        </Media>
      </BelowDefault>
      <Default>
        <Card>
          <CardImage>
            <figure className='image is-square'>
              <Image
                style={{ minWidth: '100%' }}
                className='progressive-image'
                src={`${publicRuntimeConfig.imagehandler}/400x400/${
                  product.image
                }`}
                placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                  product.image
                }`}
                alt='product image'
              />
            </figure>
          </CardImage>
          <CardContent style={{minHeight: '6rem'}} className='has-text-centered is-size-6'>{product.productName}</CardContent>
          <CardFooter>
            <CardFooterItem style={{ justifyContent: 'space-around' }}>
              <span>Смотреть все наши новости</span>
              <Icon className='fas fa-chevron-right' />
            </CardFooterItem>
          </CardFooter>
        </Card>
      </Default>
      <style jsx>{`
        :global(figure.product-media) {
          width: 100px;
          height: 100px;
          overflow: hidden;
        }
        :global(img.media-image) {
          left: 50%;
          top: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </React.Fragment>
  )
}
