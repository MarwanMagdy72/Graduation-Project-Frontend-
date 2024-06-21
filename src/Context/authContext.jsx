import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { setDoc, doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore"; 
import { auth, db } from "../Firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState(() => {
    const savedDetails = localStorage.getItem('userDetails');
    return savedDetails ? JSON.parse(savedDetails) : {};
  });

  const signUp = async (email, password, name, phone, role, age) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", result.user.uid), {
        name,
        email,
        phone,
        role,
        age, 
      });
      const details = { name, email, phone, role, age }; 
      setUserDetails(details);
      localStorage.setItem('userDetails', JSON.stringify(details));
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const Logout = async () => {
    try {
      await signOut(auth);
      setUserDetails({});
      localStorage.removeItem('userDetails');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
      if (userDoc.exists()) {
        const details = userDoc.data();
        setUserDetails(details);
        localStorage.setItem('userDetails', JSON.stringify(details));
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };

  const updateUserDetails = async (details) => {
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, details);
      setUserDetails((prevDetails) => ({ ...prevDetails, ...details }));
      localStorage.setItem('userDetails', JSON.stringify({ ...userDetails, ...details }));
    } catch (error) {
      console.error("Error updating user details:", error);
      throw error;
    }
  };

  const fetchAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const details = userDoc.data();
          setUserDetails(details);
          localStorage.setItem('userDetails', JSON.stringify(details));
        }
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userDetails,
        signUp,
        Logout,
        login,
        forgotPassword,
        updateUserEmail,
        updateUserPassword,
        updateUserDetails,
        fetchAllUsers, 
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
