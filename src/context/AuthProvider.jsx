import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("null");
  const [loading, setLoading] = useState("true");

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const sendEmailVerificationFunc = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser);
  };

  const signInWithEmailAndPasswordFunc = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailFunc = () => {
     setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUserFunc = () => {
     setLoading(true)
    return signOut(auth);
  };

  const sendPasswordResetEmailFunc = (email) => {
     setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    logOutUserFunc,
    sendPasswordResetEmailFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    loading,
    setLoading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
     console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
