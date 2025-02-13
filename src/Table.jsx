import { useState, useEffect } from "react";
import dogService from "./DogService";
import "./App.css";
import "./Table.css";

import Row from "./Row";
import DeletePopup from "./DeletePopup";
import SearchBar from "./SearchBar";
import BreedFilterDropDown from "./BreedFilterDropDown";
import NavBar from "./NavBar";

function Table() {
  const [list, setList] = useState({});
  const [deleteDogId, setDeleteDogId] = useState("");
  const [showPopUp, setShowPopup] = useState(false);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(dogService.currentPage);

  const popup = showPopUp ? (
    <DeletePopup
      setList={setList}
      setShowPopup={setShowPopup}
      deleteDogId={deleteDogId}
    />
  ) : undefined;

  useEffect(() => {
    let numberOfPages = Math.ceil(list.totalRecords / list.pageSize);
    let newPages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      newPages.push(i);
    }
    setPages(newPages);
    setCurrentPage(dogService.currentPage);
  }, [list]);

  useEffect(() => {
    dogService.getDogs().then(setList);
  }, []);

  function handlePageClick(page) {
    setCurrentPage(page);
    dogService.currentPage = page;
    dogService.getDogs().then(setList);
  }

  function handleTheadClick(name) {
    if (dogService.currentSort !== name) {
      dogService.isAsc = true;
      dogService.currentSort = name;
    } else {
      dogService.isAsc = !dogService.isAsc;
    }
    dogService.getDogs().then(setList);
  }

  return (
    <div>
      {popup}
      <div>
        <NavBar />
        <div className="App App-header">
          {list?.data?.length > 0 ? (
            <div className="table">
              <div className="filters">
                <SearchBar setList={setList} />
                <BreedFilterDropDown setList={setList} />
              </div>
              <table>
                <thead>
                  <tr className="thead">
                    <th name="Name" onClick={() => handleTheadClick("Name")}>
                      Name{" "}
                      {dogService.currentSort === "Name"
                        ? dogService.isAsc
                          ? "↑"
                          : "↓"
                        : ""}
                    </th>
                    <th name="Age" onClick={() => handleTheadClick("Age")}>
                      Age{" "}
                      {dogService.currentSort === "Age"
                        ? dogService.isAsc
                          ? "↑"
                          : "↓"
                        : ""}
                    </th>
                    <th name="Breed" onClick={() => handleTheadClick("Breed")}>
                      Breed{" "}
                      {dogService.currentSort === "Breed"
                        ? dogService.isAsc
                          ? "↑"
                          : "↓"
                        : ""}
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {list.data.map((dog) => (
                    <Row
                      key={dog.id}
                      dog={dog}
                      setDeleteDogId={setDeleteDogId}
                      setShowPopup={setShowPopup}
                    />
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="paging">
                      {pages.map((page) => (
                        <label
                          key={page}
                          className={page === currentPage ? "currentPage" : ""}
                          onClick={() => handlePageClick(page)}
                        >
                          {page}{" "}
                        </label>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>There are no dogs.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Table;
