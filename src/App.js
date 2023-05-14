import "./App.css";
import Mockman from "mockman-js";

function App() {
  console.log(process.env.REACT_APP_JWT_SECRET, "ENV");
  return (
    <div className="App">
      <h1>E-Commerce Project</h1>
      <Mockman />
    </div>
  );
}

export default App;
