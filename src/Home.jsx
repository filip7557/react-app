import { useNavigate } from 'react-router-dom';
import './App.css';

import Button from './Button';

function Home() {

    const navigate = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to <b>Dog Shelter</b></h1>
                <Button text="Enter" onClick={() => navigate("/Dogs")}/>
            </header>
        </div>
    );
}

export default Home