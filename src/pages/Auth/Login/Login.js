import { useAuth } from "../../../contexts/AuthContext";
import "../Login/Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Login() {
  const {
    authState: { email, password },
    authDispatch,
    loggedIn,
    setUserDetails,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const userValidation = () => {
    if (email.trim().length <= 0 && password.trim().length <= 0) {
      return console.error("Email & Password cannot be empty");
    } else if (email.trim().length <= 0) {
      return console.error("Email cannot be empty");
    } else if (password.trim().length <= 0) {
      return console.error("Password cannot be empty");
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!regex.test(email)) {
      return console.error("Invalid email, please enter a valid email address");
    }

    setUserDetails({ email: email, password: password });

    setTimeout(() => navigate(location?.state?.from?.pathname), 1000);
  };

  return (
    <div className="login__card__container">
      <div className="login__card">
        <h2>Login</h2>

        <label>
          <p>Email address</p>
          <input
            type="email"
            value={email}
            placeholder="example@domain.com"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            placeholder="**************"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
        </label>

        <label className="checkbox">
          <input type="checkbox" />
          Remember me
        </label>

        <button onClick={userValidation}>Login</button>

        <Link to="/signup">Create New Account ▶</Link>
      </div>
    </div>
  );
}
