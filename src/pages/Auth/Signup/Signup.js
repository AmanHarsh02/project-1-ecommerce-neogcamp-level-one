import "../Signup/Signup.css";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <div className="signup__card__container">
      <div className="signup__card">
        <h2>Signup</h2>

        <label>
          <p>First name</p>
          <input type="text" placeholder="First name" className="input" />
        </label>

        <label>
          <p>Last name</p>
          <input type="text" placeholder="Last name" className="input" />
        </label>

        <label>
          <p>Email address</p>
          <input
            type="email"
            placeholder="example@domain.com"
            className="input"
          />
        </label>

        <label>
          <p>Email address</p>
          <input
            type="password"
            placeholder="**************"
            className="input"
          />
        </label>

        <label className="checkbox">
          <input type="checkbox" />I accept all Terms & Conditions
        </label>

        <button>Create New Account</button>

        <Link to="/login">Already have an account ▶</Link>
      </div>
    </div>
  );
}
