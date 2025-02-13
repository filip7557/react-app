import { useNavigate } from "react-router-dom";

import Button from "./Button";

function Row({ dog, setDeleteDogId, setShowPopup }) {
  const navigate = useNavigate();

  function onUpdateClick() {
    navigate(`/dogs/${dog.id}`);
  }

  function onDeleteClick() {
    setDeleteDogId(dog.id);
    setShowPopup(true);
  }

  return (
    <tr>
      <td>{dog.name}</td>
      <td>{dog.age}</td>
      <td>{dog.breed.name}</td>
      <td className="actions">
        <Button text="Update" className="update" onClick={onUpdateClick} />
        <Button text="Delete" className="delete" onClick={onDeleteClick} />
      </td>
    </tr>
  );
}

export default Row;
