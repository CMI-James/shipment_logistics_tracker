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
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false once the user state is known
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
};
