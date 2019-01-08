import { Button, Card, CardContent, CardFooter, CardFooterItem, CardImage, Icon, Media, MediaContent, MediaLeft, MediaRight } from 'bloomer';
import getConfig from 'next/config';
import { BelowDefault, Default } from '../styles/utils';
import Image from './Image';

const { publicRuntimeConfig } = getConfig()

export default ({ news }) => {
  return (
    <React.Fragment>
      <Default>
        <Media className='index-media'>
          <MediaLeft>
            <figure className='image figure-media'>
              <Image
                style={{ minWidth: '100%' }}
                className='progressive-image media-image'
                src={`${publicRuntimeConfig.imagehandler}/320x320/${
                  news.image
                }`}
                placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                  news.image
                }`}
                alt='product news image'
              />
            </figure>
          </MediaLeft>
          <MediaContent>
            <p className='news-content'>{news.content}</p>
            <Button isColor='primary' isInverted isPulled='right'>
              <span>Смотреть все наши новости</span>
              <Icon className='fas fa-chevron-right' />
            </Button>
          </MediaContent>
          <MediaRight />
        </Media>
      </Default>
      <BelowDefault>
        <Card>
          <CardImage>
            <figure className='image figure-card'>
              <Image
                style={{ minWidth: '100%' }}
                className='progressive-image media-image'
                src={`${publicRuntimeConfig.imagehandler}/620x620/${
                  news.image
                }`}
                placeholder={`${publicRuntimeConfig.imagehandler}/15x15/${
                  news.image
                }`}
                alt='product news image'
              />
            </figure>
          </CardImage>
          <CardContent className='media-content'>{news.content}</CardContent>
          <CardFooter>
            <CardFooterItem style={{ justifyContent: 'space-around' }}>
              <span>Смотреть все наши новости</span>
              <Icon className='fas fa-chevron-right' />
            </CardFooterItem>
          </CardFooter>
        </Card>
      </BelowDefault>
      <style jsx>{`
        :global(figure.figure-media) {
          width: 200px;
          height: 200px;
          overflow: hidden;
        }
        :global(figure.figure-card) {
          width: 100%;
          height: 100vw;
          overflow: hidden;
        }
        :global(img.media-image) {
          left: 50%;
          top: 50%;
          position: absolute;
          transform: translate(-50%, -50%);
        }
        :global(.media-content) {
          text-align: justify;
          text-justify: inter-word;
        }
        p.news-content {
          margin-bottom: 1rem;
        }
      `}</style>
    </React.Fragment>
  )
}
