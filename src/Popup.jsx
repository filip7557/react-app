import './Popup.css'

import Button from "./Button";

function Popup({ text, onYesClick }) {
    return (
        <div className="Popup">
            <h3>{text}</h3>
            <form><Button text="Yes" onClick={onYesClick}/></form><form><Button text="No" className="delete"/></form>
        </div>
    );
}

export default Popup;