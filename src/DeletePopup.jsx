import dogService from './DogService';
import { useState, useEffect } from 'react';
import './DeletePopup.css'

import Button from "./Button";

function DeletePopup({ setShowPopup, deleteDogId, setList }) {
    
    const [dog, setDog] = useState({})

    useEffect(() => {
        dogService.getDogById(deleteDogId)
            .then(setDog)
    }, [deleteDogId])

    function onYesClick() {
        dogService.deleteDogById(deleteDogId)
            .then(() => {
                dogService.getDogs()
                    .then(setList);
                setShowPopup(false);
            })
    }
    
    return (
        <div className="DeletePopup">
            <h3>{"Are you sure you want to delete " + dog.name + "?"}</h3>
            <Button text="Yes" onClick={onYesClick}/><Button text="No" className="delete" onClick={() => setShowPopup(false)}/>
        </div>
    );
}

export default DeletePopup;