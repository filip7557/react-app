import { useEffect, useState } from 'react'
import dogService from './DogService';
import './BreedFilterDropDown.css'

function BreedFilterDropDown({setList}) {
    
    const [breeds, setBreeds] = useState([])
    const [breed, setBreed] = useState({name: ""})

    useEffect(() => {
        dogService.getBreeds()
            .then(setBreeds);
    }, [])

    function handleChange(e) {
        setBreed({...breed, name: e.target.value});
        dogService.breedFilter = e.target.value;
        dogService.currentPage = 1;
        dogService.getDogs()
            .then(setList);
    }

    return (
        <div>
            <label className='filterby'>Filter by Breed: </label><select value={breed.name} onChange={handleChange}><option value="">All</option>{breeds.map(breed => <option key={breed.id} value={breed.name}>{breed.name}</option>)}</select>
        </div>
    );
}

export default BreedFilterDropDown