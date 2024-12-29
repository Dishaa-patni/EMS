import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees,admin} = getLocalStorage();
    
    setUserData({ employees,admin});
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
//In React, AuthContext.Provider is a component provided by the Context API. It allows you to pass data (e.g., authentication state, user details, etc.) down the component tree without having to pass props manually at every level.eliminates prop Drilling
