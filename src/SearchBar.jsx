import { useState } from "react";
import dogService from "./DogService";

function SearchBar({ setList }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    dogService.nameFilter = e.target.value;
    dogService.currentPage = 1;
    dogService.getDogs().then(setList);
  }

  return (
    <div>
      <label className="filterby">Search by Name: </label>
      <input
        type="text"
        name="name"
        value={name || ""}
        onInput={handleChange}
        placeholder="Dog's Name"
      />
    </div>
  );
}

export default SearchBar;
