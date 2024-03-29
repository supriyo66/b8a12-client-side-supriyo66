import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true) 
    const googleProvider=new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); // Corrected function for user creation
    };

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const googleSignIn=()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
     }
    
     const logOut=()=>{
        setLoading(true)
        return signOut(auth)
     }

     const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
           })
      }
     

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser)
            console.log('fhfg', currentUser)
            setLoading(false)
            
        
            
  
         }))
          return ()=> unSubscribe();
      },[])


    const authInfo={
     user,loading,createUser,signInUser,logOut,updateUserProfile,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;