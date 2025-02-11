import './DeletePopup.css'

import Button from "./Button";

function DeletePopup({ setShowPopup, deleteDogId, setList }) {
    
    const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
    let index;
    dogs.forEach(p => {
        if (p.id === deleteDogId)
            index = dogs.indexOf(p);
    })

    const dog = dogs[index];

    function onYesClick() {
        dogs.splice(index, 1);
        localStorage.setItem("dogs", JSON.stringify(dogs));
        setList(dogs);
        setShowPopup(false);
    }
    
    return (
        <div className="DeletePopup">
            <h3>{"Are you sure you want to delete " + dog.name + "?"}</h3>
            <Button text="Yes" onClick={onYesClick}/><Button text="No" className="delete" onClick={() => setShowPopup(false)}/>
        </div>
    );
}

export default DeletePopup;