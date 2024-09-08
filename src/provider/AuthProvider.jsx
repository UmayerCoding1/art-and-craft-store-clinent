import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState();

    const createdUser = (email,password)=>  {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
// 
 const  signInWithGoogle = (provider) => {
        return signInWithPopup(auth,provider);
    }
    
    const signOutUser = () => {
        return signOut(auth);
    };

    


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () =>  unSubscribe();
    }, [])

    const authInfo = {
        user,
        createdUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;