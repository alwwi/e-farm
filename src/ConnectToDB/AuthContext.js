import React, { createContext, useContext, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  const loginUser = (userData) => {
    setCurrentUser(userData);
  };

//   const logoutUser = () => {
//     setCurrentUser(null);
//   };

  const logoutUser = async () => {
    const auth = getAuth();
    try{
        await signOut(auth);
        setCurrentUser(null);
    }catch(error){
        console.log('Logout Failed',error);
    }
  }
  

  const value = {
    currentUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
