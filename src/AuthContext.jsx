// src/AuthContext.js
import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth } from './firebaseConfig'; // Firebase auth object

// Create context for authentication
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
