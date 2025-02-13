import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dogService from "./DogService";
import "./App.css";
import "./Form.css";

import Button from "./Button";
import NavBar from "./NavBar";

function Form() {
  let updateDog = { name: "", age: "", breedId: "0" };

  const { id } = useParams();
  const navigate = useNavigate();
  const [dog, setDog] = useState(updateDog);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    dogService.getBreeds().then(setBreeds);

    if (id) {
      dogService.getDogById(id).then(setDog);
    }
  }, [id]);

  function handleChange(e) {
    setDog({ ...dog, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!(dog.name && dog.age)) {
      alert("Enter dog's name and age before submitting.");
      return;
    }
    if (id) {
      dogService.UpdateDog(id, dog).then(() => {
        navigate("/Dogs");
      });
    } else {
      const newDog = {
        name: dog.name,
        age: dog.age,
        breedId: dog.breedId,
      };
      dogService.SaveDog(newDog).then(() => {
        navigate("/Dogs");
      });
    }
  }

  function onCancelClick(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div>
      <NavBar />
      <div className="App App-header" id={id ? "updateForm" : "form"}>
        <form onSubmit={handleSubmit}>
          <table className="formTable">
            <tbody>
              <tr className="formRow">
                <td>Dog's name:</td>
                <td className="input">
                  <input
                    type="text"
                    name="name"
                    value={dog?.name || ""}
                    onInput={handleChange}
                    placeholder="Dog's Name"
                  />
                </td>
              </tr>
              <tr className="formRow">
                <td>Dog's age:</td>
                <td className="input">
                  <input
                    type="number"
                    name="age"
                    value={dog?.age || ""}
                    onInput={handleChange}
                    placeholder="Dog's Age"
                  />
                </td>
              </tr>
              <tr className="formRow">
                <td>Breed:</td>
                <td className="input">
                  <select
                    name="breedId"
                    value={dog?.breedId || "0"}
                    onChange={handleChange}
                  >
                    <option value="0" disabled="disabled">
                      Choose option
                    </option>
                    {breeds.map((breed) => (
                      <option key={breed.id} value={breed.id}>
                        {breed.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          {id ? (
            <Button className="update" text="Update" />
          ) : (
            <Button text="Save" />
          )}
          <Button text="Cancel" onClick={onCancelClick} className="delete" />
        </form>
      </div>
    </div>
  );
}

export default Form;
