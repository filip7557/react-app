import { useState } from 'react';
import './Form.css';

import Button from "./Button";

function Form({ setList, updateDogId, setUpdateDogId, setShowForm }) {

    let updateDog = {name: "", age: ""};
    if(updateDogId > 0) {
        const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
            let index;
            dogs.forEach(p => {
                if (p.id === updateDogId)
                    index = dogs.indexOf(p);
            })
            updateDog = dogs[index];
    }

    const [dog, setDog] = useState(updateDog);


    function findMaxId(dogs)
        {
            let max = 0;
            dogs.forEach(p => {
                if (p.id > max)
                    max = p.id;
            })
            return max;
        }

    function handleChange(e) {
        setDog({...dog, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!(dog.name && dog.age)) {
            alert("Enter dog's name and age before submitting.")
            return;
        }
        if (updateDogId > 0) {
            const dogs = JSON.parse(localStorage.getItem("dogs"));
            let index;
            dogs.forEach(p => {
                if (p.id === updateDogId)
                    index = dogs.indexOf(p);
            })
            dogs[index].name = dog.name;
            dogs[index].age = dog.age;
            setList(dogs);
            localStorage.setItem("dogs", JSON.stringify(dogs));
            setDog({
                name: "",
                age: ""
            })
            setUpdateDogId(0);
        }
        else {
            const dogs = JSON.parse(localStorage.getItem("dogs"));
            const newDog = {
                id: findMaxId(dogs) + 1,
                name: dog.name,
                age: dog.age
            };
            dogs.push(newDog);
            setList(dogs);
            localStorage.setItem("dogs", JSON.stringify(dogs));
            setDog({
                name: "",
                age: ""
            })
        }
        setShowForm(false);
    }

    function onCancelClick(e) {
        e.preventDefault();
        setUpdateDogId(0);
        setShowForm(false);
    }

    let button;

    if (updateDogId > 0) {
        button = <Button  className="update" text="Update"/>;
    }
    else {
        button = <Button text="Save"/>;
    }
    return (
        <div id={updateDogId > 0 ? "updateForm" : "form" }>
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr><td>Dog's name:</td><td><input type="text" name="name" value={dog?.name} onInput={handleChange} placeholder="Dog's Name"/></td></tr>
                    <tr><td>Dog's age:</td><td><input type="number" name="age" value={dog?.age} onInput={handleChange} placeholder="Dog's Age"/></td></tr>
                </tbody>
            </table>
            {button}
            <Button text="Cancel" onClick={onCancelClick} className="delete"/>
            </form>
        </div>
    );
}

export default Form;