import { withAppSyncData } from 'next-apollo-appsync'
import getConfig from 'next/config'
import Amplify, { Auth } from 'aws-amplify'

const { publicRuntimeConfig } = getConfig()

Amplify.configure({
    Auth: {
        identityPoolId: publicRuntimeConfig.identityPoolId,
        region: publicRuntimeConfig.region,
        userPoolId: publicRuntimeConfig.userPoolId,
        userPoolWebClientId: publicRuntimeConfig.userPoolWebClientId,
        mandatorySignIn: false
    }
})

const config = {
    url: publicRuntimeConfig.graphqlEndpoint,
    region: publicRuntimeConfig.region,
    auth: {
        type: publicRuntimeConfig.authenticationType,
        credentials: () => Auth.currentCredentials()
    },
    complexObjectsCredentials: () => Auth.currentCredentials(),
    offlineConfig: {
        callback: (err, succ) => {
            if (err) {
                // eslint-disable-next-line no-unused-vars
                const { mutation, variables } = err
                console.warn(`Error for ${mutation}`, err)
            } else {
                // eslint-disable-next-line no-unused-vars
                const { mutation, variables } = succ
                console.info(`Success for ${mutation}`, succ)
            }
        }
    }
}

export default withAppSyncData(config)