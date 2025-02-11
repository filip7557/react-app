import './Table.css';

import Row from './Row';

function Table() {

    const dogs = JSON.parse(localStorage.getItem("dogs")) || [];

    let tbody;
    if (dogs.length > 0) {
        tbody = dogs.map(dog => <Row key={dog.id} dog={dog} />);
    }
    return (
        <div className="Table">
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </table> 
        </div>
    );
}

export default Table;