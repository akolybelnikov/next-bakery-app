import Amplify, { Auth } from 'aws-amplify'
import { defaultDataIdFromObject } from 'aws-appsync'
import { withAppSyncData } from 'next-apollo-appsync'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

Amplify.configure({
  Auth: {
    identityPoolId: publicRuntimeConfig.identityPoolId,
    region: publicRuntimeConfig.region,
    userPoolId: publicRuntimeConfig.userPoolId,
    userPoolWebClientId: publicRuntimeConfig.userPoolWebClientId,
    mandatorySignIn: false,
  },
})

const config = {
  url: publicRuntimeConfig.graphqlEndpoint,
  region: publicRuntimeConfig.region,
  auth: {
    type: publicRuntimeConfig.authenticationType,
    credentials: () => Auth.currentCredentials(),
  },
  complexObjectsCredentials: () => Auth.currentCredentials(),
  offlineConfig: {
    callback: (err, succ) => {
      if (err) {
        const { mutation } = err
        console.warn(`Error for ${mutation}`, err)
      } else {
        const { mutation } = succ
        console.info(`Success for ${mutation}`, succ)
      }
    },
  },
  cacheOptions: {
    dataIdFromObject: obj => {
      let id = defaultDataIdFromObject(obj)

      if (!id) {
        const { __typename: typename } = obj
        switch (typename) {
          case 'User':
            return `${typename}:${obj}.id`
          case 'OfferConnection':
            return `${typename}:${obj}.id`
          case 'NewsConnection':
            return `${typename}:${obj}.id`
          case 'CategoriesConnection':
            return `${typename}:${obj}.id`
          case 'ProductConnection':
            return `${typename}:${obj}.id`
          default:
            return id
        }
      }

      return id
    },
    addTypename: true,
  },
}

export default withAppSyncData(config)
