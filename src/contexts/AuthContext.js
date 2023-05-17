import { createContext, useContext, useState, useReducer } from "react";
import { authInitialState, authReducer } from "../reducers/AuthReducer";
import { useData } from "./DataContext";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { dataDispatch } = useData();

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(userDetails),
  };

  const performLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", requestOptions);

      const data = await response.json();

      if (response.status === 200) {
        setLoggedIn(true);
        localStorage.setItem("token", data.encodedToken);
        dataDispatch({ type: "SET_USER_DATA", payload: data.foundUser });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUserDetails(null);
      authDispatch({ type: "SET_EMAIL", payload: "" });
      authDispatch({ type: "SET_PASSWORD", payload: "" });
    }
  };

  if (userDetails) {
    performLogin();
  }

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, setUserDetails, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
