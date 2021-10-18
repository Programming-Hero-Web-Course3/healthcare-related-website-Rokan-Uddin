import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user,setUser]= useState({});
    const [isLoading,setIsLoading]= useState(true);
    const auth = getAuth();

    const signInUsingGoogle= (history,redirect_uri) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=> {
            setUser(result.user);
        })
        .finally(()=>{
            history.push(redirect_uri);
            setIsLoading(false)}
        )
    }
    const signInUsingEmailPassword= (email,password,history,redirect_uri)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setUser(result.user);
        })
        .finally(()=>{
            history.push(redirect_uri);
            setIsLoading(false);
        })
    }
    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false))
    }
    const updateUser=(name)=>{
        updateProfile(auth.currentUser,{displayName:{name}})
        .then(res=>{
            console.log(res.user)
        })
    }
    const createUser=(email,password,name)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            
        })
        .finally(()=>{
            // updateUser(name);
        })

    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        createUser,
        signInUsingEmailPassword
    }
}
export default useFirebase;