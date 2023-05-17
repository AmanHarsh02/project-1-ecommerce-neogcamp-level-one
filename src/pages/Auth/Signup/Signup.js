import { useAuth } from "../../../contexts/AuthContext";
import "../Signup/Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Signup() {
  const {
    authState: { email, password, firstName, lastName },
    authDispatch,
    signupValidation,
  } = useAuth();

  const location = useLocation();

  const handleSignup = () => {
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });
    signupValidation();
  };

  return (
    <div className="signup__card__container">
      <div className="signup__card">
        <h2>Signup</h2>

        <label>
          <p>First name</p>
          <input
            type="text"
            value={firstName}
            placeholder="First name"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_FIRSTNAME", payload: e.target.value })
            }
          />
        </label>

        <label>
          <p>Last name</p>
          <input
            type="text"
            value={lastName}
            placeholder="Last name"
            className="input"
            onChange={(e) =>
              authDispatch({ type: "SET_LASTNAME", payload: e.target.value })
            }
          />
        </label>

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
          <input type="checkbox" />I accept all Terms & Conditions
        </label>

        <button onClick={handleSignup}>Create New Account</button>

        <Link to="/login">Already have an account ▶</Link>
      </div>
    </div>
  );
}
