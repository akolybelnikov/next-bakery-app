import ProgressiveImage from 'react-progressive-image'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default ({ name, size, alt, className }) => (
  <ProgressiveImage
    src={`${publicRuntimeConfig.imagehandler}/${size}/${name}`}
    placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAEiklEQVR42u3VMQEAMAjAsOFvytCGElSggZtEQp9GV/4HAEthIAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIABgIAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIABgIAAYCAAGAoCBAGAgMgBgIAAYCAAGAoCBAICBAGAgABgIAAYCgIEAgIEAYCAAGAgABgKAgQCAgQBgIAAYCAAGAoCBAICBAGAgABgIAAYCgIEAgIEAYCAAGAgABgKAgQCAgQBgIAAYCAAGAoCBAICBAGAgABgIAAYCgIEYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIABgIAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIABgIAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIAYCgIEAYCAAGAgABgIABgKAgQBgIAAYCAAGAgAGAoCBAGAgABgIAAYCAAYCgIEAYCAAGAgABgIABgKAgQBgIAAYCAAGAgAGAoCBAGAgABgIAAYCAAYCgIEAYCAAGAgABgIABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABiIgQBgIAAYCAAGAoCBAICBAGAgABgIAAYCgIEAgIEAYCAAGAgABgKAgQCAgQBgIAAYCAAGAoCBAICBAGAgABgIAAYCgIEAgIEAYCAAGAgABgKAgQCAgQBgIAAYCAAGAoCBAICBAGAgABgIAAYCgIEYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABiIDAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIABgIAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAAYCAAGAgABgKAgQBgIABgIAAYCAAGAoCBAGAgAGAgABgIAAYCgIEAYCAGAoCBAGAgABgIAAYCAAYCgIEAYCAAGAgABgIABgKAgQBgIAAYCAAGAgAGAoCBAGAgABgIAAYCAAYCgIEAYCAAGAgABgIABgKAgQBgIAAYCAAGAgAGAoCBAGAgABgIAAYCAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAGAgAGAgABgKAgQBgIAAYCAAYCAAGAoCBAGAgABgIABgIAAYCgIEAYCAAXDWUAPx+QlwQlwAAAABJRU5ErkJggg=='>
    {(currentSrc, loading) => (
      <React.Fragment>
        <img
          src={currentSrc}
          alt={alt}
          className={loading ? `${className} loading-img` : className}
        />
        <noscript>
          <img src={`${publicRuntimeConfig.imagehandler}/${size}/${name}`} alt={alt} className={className} />
        </noscript>
        <style jsx>
          {`
            @media screen and (min-width: 600px) {
              img {
                min-width: 100%;
              }
            }
            img {
              opacity: 1;
              transition: opacity 0.25s ease-in;
            }
            :global(.loading-image) {
              opacity: 0.5;
            }
          `}
        </style>
      </React.Fragment>
    )}
  </ProgressiveImage>
)
