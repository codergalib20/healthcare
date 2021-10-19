import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider,
    onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import swal from 'sweetalert';
import initializeAuthentication from "../pages/Login/firebase/firebase.init";



initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const history = useHistory()
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
       .finally(() => {
        setIsLoading(false)
       })
           .then(error => {
            console.log(error.message);
        })
    }
    // Create user account and Update Profile________________________________
    const createUserEmailAndPassword = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                }).then(() => {
                    swal("Good job!", "Account has been created!", "success");
                    history.push('/');
                })

            }).catch(err => swal("Something went wrong!", `${err.message}`, "error"))
    }
    
    // User Login Email and Password______________________
    const userLoginEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            });
    }

    // Get Email from user
    function getEmail(e) {
        setEmail(e?.target?.value)
    }
    // Get Password from user
    function getPassword(e) {
        setPassword(e?.target?.value)
    }



    // Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    },[])

    
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => {
            setIsLoading(false)
        })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setUser,
        getEmail,
        getPassword,
        error,
        createUserEmailAndPassword,
        userLoginEmailPassword
    }
}

export default useFirebase;

// Video 04:05 / 12:20 Minute Second of