import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user,setUser]= useState({});
    const [isLoading,setIsLoading]= useState(true);
    const auth = getAuth();

    const signInUsingGoogle= () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=> {
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false))
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
    const createUser=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>console.log(result.user))
    }
    const signInUsingEmailPassword= (email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>console.log(result.user))
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