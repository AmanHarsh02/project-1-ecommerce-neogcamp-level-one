import { useData } from "../../contexts/DataContext";
import "../Loader/Loader.css";
import DotLoader from "react-spinners/DotLoader";

const override = {
  margin: "auto",
};

export function Loader() {
  const { isLoading } = useData();

  return (
    <div className="loader__container">
      <DotLoader
        color="#5348c7"
        cssOverride={override}
        loading={isLoading}
        size={100}
        speedMultiplier={2}
      />
    </div>
  );
}
