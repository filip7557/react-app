import './Table.css';

import Row from './Row';

function Table({list, setUpdateDogId, setDeleteDogId, setShowForm, setShowPopup}) {
    return (
        <div className="Table">
            {list.length > 0 ?
            <table>
            <thead>
                <tr className='thead'>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map(dog => <Row key={dog.id} dog={dog} setUpdateDogId={setUpdateDogId} setDeleteDogId={setDeleteDogId} setShowForm={setShowForm} setShowPopup={setShowPopup}/>)}
            </tbody>
        </table> :
        <p>There are no dogs.</p>
            }
        </div>
    );
}

export default Table;