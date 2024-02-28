import {getRemoteConfig, getValue, RemoteConfig, fetchAndActivate} from 'firebase/remote-config'
import {FirebaseApp} from "firebase/app";

export enum RemoteConfigKeys  {
    googlePlayUrl= 'google_play_url',
    appleStoreUrl = 'apple_store_url'
}

class AppRemoteConfig {
    static async getInstance (app: FirebaseApp): Promise<RemoteConfig> {
        const remoteConfig = getRemoteConfig(app)
        // remoteConfig.settings.minimumFetchIntervalMillis = 500;
        await fetchAndActivate(remoteConfig)
        return remoteConfig
    }

    static getRemoteVal (rconf: RemoteConfig, key: RemoteConfigKeys) {
        return getValue(rconf, key)
    }
}

export default AppRemoteConfig