import { useAuth } from "../../../contexts/AuthContext";
import "../Login/Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Login() {
  const {
    authState: { email, password },
    authDispatch,
    loginValidation,
  } = useAuth();

  const location = useLocation();

  const handleLogin = () => {
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });
    loginValidation();
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

        <button onClick={handleLogin}>Login</button>

        <Link to="/signup">Create New Account ▶</Link>
      </div>
    </div>
  );
}
