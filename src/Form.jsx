import { useState, useEffect } from 'react';
import dogService from './DogService';
import './Form.css';

import Button from "./Button";

function Form({ setList, updateDogId, setUpdateDogId, setShowForm }) {

    let updateDog = {name: "", age: "", breedId: "0"};

    const [dog, setDog] = useState(updateDog);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        dogService.getBreeds()
            .then(setBreeds);
    }, [])

    useEffect(() => {
        dogService.getDogById(updateDogId)
            .then(setDog);
    }, [updateDogId])

    function handleChange(e) {
        setDog({...dog, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!(dog.name && dog.age)) {
            alert("Enter dog's name and age before submitting.")
            return;
        }
        if (updateDogId !== "") {
            dogService.UpdateDog(updateDogId, dog)
                .then(() => {
                    dogService.getDogs()
                        .then(setList)
                    setDog({
                        name: "",
                        age: "",
                        breedId: "0"
                    })
                    setUpdateDogId("");
                    setShowForm(false);
                })
        }
        else {
            const newDog = {
                name: dog.name,
                age: dog.age,
                breedId: dog.breedId
            };
            dogService.SaveDog(newDog)
                .then(() => {
                    dogService.getDogs()
                        .then(setList)
                    setDog({
                        name: "",
                        age: "",
                        breedId: "0"
                    })
                    setShowForm(false);
                })
        }
    }

    function onCancelClick(e) {
        e.preventDefault();
        setUpdateDogId("");
        setShowForm(false);
    }
    return (
        <div id={updateDogId !== "" ? "updateForm" : "form" }>
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr className='formRow'><td>Dog's name:</td><td className='input'><input type="text" name="name" value={dog?.name || ""} onInput={handleChange} placeholder="Dog's Name"/></td></tr>
                    <tr className='formRow'><td>Dog's age:</td><td className='input'><input type="number" name="age" value={dog?.age  || ""} onInput={handleChange} placeholder="Dog's Age"/></td></tr>
                    <tr className='formRow'><td>Breed:</td><td className='input'><select name="breedId" value={dog?.breedId || "0"} onChange={handleChange}><option value="0" disabled="disabled">Choose option</option>{breeds.map(breed => <option key={breed.id} value={breed.id}>{breed.name}</option>)}</select></td></tr>
                </tbody>
            </table>
            {updateDogId !== "" ? (<Button  className="update" text="Update"/>) : (<Button text="Save"/>)}
            <Button text="Cancel" onClick={onCancelClick} className="delete"/>
            </form>
        </div>
    );
}

export default Form;