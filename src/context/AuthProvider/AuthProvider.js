import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.confi';



export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true)


    const providerLogIn=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    };

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
       }
       const logOut=()=>{
        setLoading(true)
        return signOut(auth)
     }

     const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
     }

     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
                 setUser(currentUser)
                 setLoading(false)
             })
             return ()=>{
                 unSubscribe()
             }
         },[])

    const authInfo={loading,updateUser,setUser,providerLogIn,user,createUser,userLogin,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;