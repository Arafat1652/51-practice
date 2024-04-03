import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import {  createContext, useEffect, useState } from "react";
import auth from '../../firebase/firebase.config';


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]= useState('')
    const [loading, setLoading] = useState(true)

    // create account
   const createUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
   }
   // signIn/Login
   const loggedInUser =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   
   // sign in with google 
   const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }

   // sign in with github 
   const gitHubSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider)
   }
   // sing in with facebook
   const facbookSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth, facebookProvider)
   }

   // signOUt/LogOUt
   const loggedOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }
   
   // observe user
   useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
           setUser(currentUser)
           console.log(currentUser,'we are observing you')
           setLoading(false)
    })
    return()=>{
        unSubscribe()
    }
},[])
console.log(user,'pri')
    
   const authInfo = {createUser, loggedInUser, user, loggedOut,googleSignIn, gitHubSignIn,facbookSignIn , loading}
    
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}
