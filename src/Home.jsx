import { useNavigate } from "react-router-dom";
import "./App.css";

import Button from "./Button";
import NavBar from "./NavBar";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to <b>Dog Shelter!</b>
          </h1>
          <Button
            text="Enter"
            className="home"
            onClick={() => navigate("/Dogs")}
          />
        </header>
      </div>
    </div>
  );
}

export default Home;
