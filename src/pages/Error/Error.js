import { useEffect } from "react";
import { useData } from "../../contexts/DataContext";
import "../Error/Error.css";
import { page_not_found_illustration } from "../../assets";

export function Error() {
  const { setTitle } = useData();

  useEffect(() => setTitle("Page Not Found"), []);
  return (
    <div className="error_img__container">
      <img
        src={page_not_found_illustration}
        alt="Page Not Found"
        className="page__not__found__img"
      ></img>
    </div>
  );
}
