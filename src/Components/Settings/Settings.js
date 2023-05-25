import { useAuth } from "../../contexts/AuthContext";
import "../Settings/Settings.css";

export function Settings() {
  const { setLoggedIn, authDispatch } = useAuth();

  return (
    <div className="settings__container">
      <div className="settings__card__container">
        <button
          className="log__out__btn"
          onClick={() => {
            setLoggedIn(false);
            authDispatch({
              type: "LOG_OUT",
            });
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
