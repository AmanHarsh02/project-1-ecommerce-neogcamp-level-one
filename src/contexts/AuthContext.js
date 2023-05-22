import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { authInitialState, authReducer } from "../reducers/AuthReducer";
import { useData } from "./DataContext";
import { useNavigate } from "react-router";

const AuthContext = createContext();
let method = "";

export function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { dataDispatch } = useData();
  const navigate = useNavigate();

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
        navigate(authState.location);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUserDetails(null);
    }
  };

  const performSignup = async () => {
    try {
      const response = await fetch("/api/auth/signup", requestOptions);

      const data = await response.json();

      if (response.status === 201) {
        setLoggedIn(true);
        localStorage.setItem("token", data.encodedToken);
        dataDispatch({ type: "SET_USER_DATA", payload: data.createdUser });
        navigate(authState.location);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUserDetails(null);
    }
  };

  if (userDetails) {
    method === "login" ? performLogin() : performSignup();
  }

  const loginValidation = () => {
    if (
      authState.email.trim().length <= 0 &&
      authState.password.trim().length <= 0
    ) {
      return console.error("Email & Password cannot be empty");
    } else if (authState.email.trim().length <= 0) {
      return console.error("Email cannot be empty");
    } else if (authState.password.trim().length <= 0) {
      return console.error("Password cannot be empty");
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!regex.test(authState.email)) {
      return console.error("Invalid email, please enter a valid email address");
    }

    method = "login";
    setUserDetails({ email: authState.email, password: authState.password });
  };

  const signupValidation = () => {
    if (
      authState.email.trim().length <= 0 ||
      authState.password.trim().length <= 0 ||
      authState.firstName.trim().length <= 0 ||
      authState.lastName.trim().length <= 0
    ) {
      return console.error("Email & Password cannot be empty");
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!regex.test(authState.email)) {
      return console.error("Invalid email, please enter a valid email address");
    }

    method = "signup";
    setUserDetails({
      email: authState.email,
      password: authState.password,
      firstName: authState.firstName,
      lastName: authState.lastName,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        setUserDetails,
        loggedIn,
        loginValidation,
        signupValidation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
