import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // Observe state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            // console.log('observe from auth context', currenUser);
            setUser(currenUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    },[]);
    
    // Google provider
    const googleProvider = new GoogleAuthProvider();
    // SignIn With google
    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub provider
    const githubProvider = new GithubAuthProvider();
    // SignIn With GitHub
    const createUserWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // Create user by email and pass
    const createUserWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user by email and pass
    const loginUserWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Value Holder
    const authInfo = {
        user,
        loading,
        createUserWithGoogle,
        createUserWithGitHub,
        createUserWithEmailPass,
        loginUserWithEmailPass,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}