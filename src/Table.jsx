import { useState, useEffect } from 'react';
import dogService from './DogService';
import './Table.css';

import Row from './Row';

function Table({list, setList, setUpdateDogId, setDeleteDogId, setShowForm, setShowPopup}) {
    
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(dogService.currentPage);

    useEffect(() => {
        let numberOfPages = Math.ceil(list.totalRecords / list.pageSize);
        let newPages = [];
        for(let i = 1; i <= numberOfPages; i++) {
            newPages.push(i)
        }
        setPages(newPages);
    }, [list])

    function handlePageClick(page) {
        setCurrentPage(page);
        dogService.currentPage = page;
        dogService.getDogs()
            .then(setList);
    }
    
    return (
        <div className="Table">
            {list?.data?.length > 0 ?
            <table>
            <thead>
                <tr className='thead'>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Breed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.data.map(dog => <Row key={dog.id} dog={dog} setUpdateDogId={setUpdateDogId} setDeleteDogId={setDeleteDogId} setShowForm={setShowForm} setShowPopup={setShowPopup}/>)}
                <tr><td></td><td></td><td></td><td className='paging'>{pages.map(page => <label key={page} className={page === currentPage ? "currentPage" : ""} onClick={() => handlePageClick(page)}>{page} </label>)}</td></tr>
            </tbody>
        </table> :
        <p>There are no dogs.</p>
            }
        </div>
    );
}

export default Table;