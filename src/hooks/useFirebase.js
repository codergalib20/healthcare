import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
           
          });
    }

    const handleFormcontrol = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 charactar long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have a minimum of two upper cases ')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('The password will contain a minimum of one special symbols (!@#$&*)')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }


    const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                setError('')
                // setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                updateUserName()
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    const toggolLogin = e => {
        setIsLogin(e.target.checked);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
        return ()=> unsubscribed;
    }, [])
    return {
        name,
        handleNameChange,
        user,
        email,
        password,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleFormcontrol,
        error,
        toggolLogin,
        isLogin,
        setIsLoading,
        isLoading
    }


}


export default useFirebase;