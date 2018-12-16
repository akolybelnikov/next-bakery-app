import getConfig from 'next/config'
import { Auth } from 'aws-amplify'

const { publicRuntimeConfig } = getConfig()

export async function currentUser() {
    try {
        const info = await Auth.currentUserInfo()
        if (info && (info.attributes.sub !== publicRuntimeConfig.defaultUsername)) {
            return info
        } 
         return null
    } catch (e) {
        console.error(e)
    }
}