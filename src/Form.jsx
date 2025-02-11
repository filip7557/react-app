import { useState, useEffect } from 'react';
import './Form.css';

import Button from "./Button";

function Form({ setList, updateDogId, setUpdateDogId, setShowForm }) {

    let updateDog = {name: "", age: "", breedId: "1"};

    const [dog, setDog] = useState(updateDog);

    useEffect(() => {
        const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
            let index;
            dogs.forEach(p => {
                if (p.id === updateDogId)
                    index = dogs.indexOf(p);
            })
            setDog(dogs[index]);
    }, [updateDogId])


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
            const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
            let index;
            dogs.forEach(p => {
                if (p.id === updateDogId)
                    index = dogs.indexOf(p);
            })
            dogs[index].name = dog.name;
            dogs[index].age = dog.age;
            dogs[index].breedId = dog.breedId;
            setList(dogs);
            localStorage.setItem("dogs", JSON.stringify(dogs));
            setDog({
                name: "",
                age: ""
            })
            setUpdateDogId(0);
        }
        else {
            const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
            const newDog = {
                id: findMaxId(dogs) + 1,
                name: dog.name,
                age: dog.age,
                breedId: dog.breedId
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
    return (
        <div id={updateDogId > 0 ? "updateForm" : "form" }>
            <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr className='formRow'><td>Dog's name:</td><td className='input'><input type="text" name="name" value={dog?.name} onInput={handleChange} placeholder="Dog's Name"/></td></tr>
                    <tr className='formRow'><td>Dog's age:</td><td className='input'><input type="number" name="age" value={dog?.age} onInput={handleChange} placeholder="Dog's Age"/></td></tr>
                    <tr className='formRow'><td>Breed:</td><td className='input'><select name="breedId" value={dog?.breedId} onChange={handleChange}><option value="0" selected="true" disabled="disabled">Choose option</option><option value="1">Bulldog</option><option value="2">German sheppard</option></select></td></tr>
                </tbody>
            </table>
            {updateDogId > 0 ? (<Button  className="update" text="Update"/>) : (<Button text="Save"/>)}
            <Button text="Cancel" onClick={onCancelClick} className="delete"/>
            </form>
        </div>
    );
}

export default Form;