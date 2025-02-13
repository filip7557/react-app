import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Table from "./Table";
import Form from "./Form";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Dogs" element={<Table />} />
      <Route path="Add" element={<Form />} />
      <Route path="Dogs/:id" element={<Form />} />
      <Route path="AboutUs" element={<About />} />
    </Routes>
  );
}

export default App;
