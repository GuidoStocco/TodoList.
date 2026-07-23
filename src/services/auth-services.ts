import {auth} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, updateProfile
} from 'firebase/auth'


export const authServices = {

    signUp: async (email: string, password: string, displayName: string) => {
        const credential = await createUserWithEmailAndPassword(auth, email, password)


        await updateProfile(credential.user, {
            displayName
        });

        return credential.user;
    },

    signIn: async (email: string, password: string) => {

        const credential = await signInWithEmailAndPassword(auth, email, password)

        return credential.user
    },

    logout: async () => {
        await signOut(auth);
    }
    
    
}