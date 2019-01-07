import { Card, CardHeader, CardHeaderIcon, CardHeaderTitle, CardImage, Icon } from 'bloomer';
import getConfig from 'next/config';
import Image from './Image';

const { publicRuntimeConfig } = getConfig()

export default props => {
  const { category } = props

  return (
    <Card>
      <CardHeader>
        <CardHeaderTitle>{category.title}</CardHeaderTitle>
        <CardHeaderIcon>
          <Icon className='fas fa-chevron-right' />
        </CardHeaderIcon>
      </CardHeader>
      <CardImage>
        <figure className='image is-square'>
          <Image
            style={{ minWidth: '100%' }}
            className='progressive-image is-background'
            src={`${publicRuntimeConfig.imagehandler}/640x640/${
              category.image
            }`}
            placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
              category.image
            }`}
            alt='product category image'
          />
        </figure>
      </CardImage>
    </Card>
  )
}
