import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.init';

firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        // .then(result => console.log(result.user))
        // .catch(error => setError(error.message))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                //error
            })
    }

    return {
        user,
        error,
        googleSignIn,
        logOut
    }
}

export default useFirebase;