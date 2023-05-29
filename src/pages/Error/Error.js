import { useEffect } from "react";
import { useData } from "../../contexts/DataContext";
import "../Error/Error.css";

export function Error() {
  const { setTitle } = useData();

  useEffect(() => setTitle("Page Not Found"), []);
  return (
    <>
      <h1>Error 404: Page not found.</h1>
    </>
  );
}
