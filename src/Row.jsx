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

    function getBreedById(breedId) {
        switch (breedId) {
            case "1":
                return "German sheppard"
            case "2":
                return "Bulldog"
            default:
                return "Unknown breed"
        }
    }

    return (
        <tr>
            <td>{dog.name}</td>
            <td>{dog.age}</td>
            <td>{getBreedById(dog.breedId)}</td>
            <td className="actions"><Button text="Update" className="update" onClick={onUpdateClick}/><Button text="Delete" className="delete" onClick={onDeleteClick}/></td>
        </tr>
    )
}

export default Row;