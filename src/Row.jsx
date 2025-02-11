import Button from "./Button";

function Row({ dog, setUpdateDogId, setDeleteDogId, setShowForm, setShowPopup }) {
    

    function onUpdateClick() {
        setUpdateDogId(dog.id);
        setShowForm(true);
    }


    function onDeleteClick() {
        setDeleteDogId(dog.id);
        setShowPopup(true);
    }

    return (
        <tr>
            <td>{dog.name}</td>
            <td>{dog.age}</td>
            <td><Button text="Update" className="update" onClick={onUpdateClick}/><Button text="Delete" className="delete" onClick={onDeleteClick}/></td>
        </tr>
    )
}

export default Row;