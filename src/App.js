import './App.css';
import dogService from './DogService';
import { useState, useEffect } from "react";

import Table from "./Table";
import Form from './Form';
import Button from './Button';
import DeletePopup from './DeletePopup';
import BreedFilterDropDown from './BreedFilterDropDown';
import SearchBar from './SearchBar';

function App() {

  const [list, setList] = useState({});
  const [updateDogId, setUpdateDogId] = useState("");
  const [deleteDogId, setDeleteDogId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showPopUp, setShowPopup] = useState(false);

  useEffect(() => {
    dogService.getDogs()
      .then(setList) 
  }, [])

  function onAdd() {
    setShowForm(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        { showPopUp ? <DeletePopup setList={setList} setShowPopup={setShowPopup} deleteDogId={deleteDogId}/> :
        <div>
          <h1>Dogs</h1>
          <SearchBar setList={setList}/>
          <BreedFilterDropDown setList={setList}/>
          <Table list={list} setList={setList} setUpdateDogId={setUpdateDogId} setDeleteDogId={setDeleteDogId} setShowForm={setShowForm} setShowPopup={setShowPopup}/>
          {showForm ? <Form setList={setList} updateDogId={updateDogId} setUpdateDogId={setUpdateDogId} setShowForm={setShowForm}/> : <Button text="Add" onClick={onAdd}/>}
        </div>
      }
        </header>
    </div>
  );
}

export default App;
