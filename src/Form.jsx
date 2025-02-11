import './Form.css';

import Button from "./Button";

function Form({ isUpdate, className }) {

    function findMaxId(dogs)
        {
            let max = 0;
            dogs.forEach(p => {
                if (p.id > max)
                    max = p.id;
            })
            return max;
        }

    function onAddSubmit(e) {
        const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
        const { dogName, dogAge } = e.target.elements
        if (dogName.value && dogAge.value) {
        const dog = {
            id: findMaxId(dogs) + 1,
            name: dogName.value,
            age: dogAge.value
        }
        dogs.push(dog);
        localStorage.setItem("dogs", JSON.stringify(dogs));
        }
        else {
            alert("Enter Dog's name and age.");
        }
    }

    function onSubmit(e) {
        e.prefentDefault();
    }

    let button;

    if (isUpdate) {
        button = <Button  className="update" text="Update"/>;
    }
    else {
        button = <Button text="Save"/>;
    }
    return (
        <div id={isUpdate ? "updateForm" : "form" } className={className}>
            <form onSubmit={isUpdate ? onSubmit : onAddSubmit}>
            <table>
                <tbody>
                    <tr><td>Dog's name:</td><td><input type="text" id={isUpdate ? "dogNameUpdate" : "dogName"} placeholder="Dog's Name"/></td></tr>
                    <tr><td>Dog's age:</td><td><input type="number" id={isUpdate ? "dogAgeUpdate" : "dogAge"} placeholder="Dog's Age"/></td></tr>
                </tbody>
            </table>
            {button}
            </form>
        </div>
    );
}

export default Form;