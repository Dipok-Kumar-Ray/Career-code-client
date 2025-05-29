import { useEffect, useState } from 'react';
import {AuthContext} from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.int';


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        singOut,
    }
    return (
     <AuthContext value={authInfo}>
        {children}
     </AuthContext>
    );
};

export default AuthProvider;