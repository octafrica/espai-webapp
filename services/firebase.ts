import {FirebaseApp, initializeApp} from 'firebase/app'
import {envs} from "@/config/envs";

class Fbase {
    static instance: FirebaseApp | null = null

    static getApp () {
        if (Fbase.instance == null) {
            Fbase.instance = initializeApp(envs);
        }

        return Fbase.instance
    }
}

export default Fbase