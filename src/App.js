import './App.css';
import { useState } from "react";

import Table from "./Table";
import Form from './Form';
import Button from './Button';
import DeletePopup from './DeletePopup';

function App() {

  const dogs = JSON.parse(localStorage.getItem("dogs"));

  const [list, setList] = useState(dogs);
  const [updateDogId, setUpdateDogId] = useState(0);
  const [deleteDogId, setDeleteDogId] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showPopUp, setShowPopup] = useState(false);

  function onAdd() {
    setShowForm(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        { showPopUp ? <DeletePopup setList={setList} setShowPopup={setShowPopup} deleteDogId={deleteDogId}/> :
        <div>
          <h1>Dogs</h1>
          <Table list={list} setList={setList} setUpdateDogId={setUpdateDogId} setDeleteDogId={setDeleteDogId} setShowForm={setShowForm} setShowPopup={setShowPopup}/>
          {showForm ? <Form setList={setList} updateDogId={updateDogId} setUpdateDogId={setUpdateDogId} setShowForm={setShowForm}/> : <Button text="Add" onClick={onAdd}/>}
        </div>
      }
        </header>
    </div>
  );
}

export default App;
