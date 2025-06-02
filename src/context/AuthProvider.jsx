import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()

  const [authData, setAuthData] = useState({ employees: [], admin: [] });


  useEffect(() => {
    setLocalStorage()
    setAuthData(getLocalStorage());
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };