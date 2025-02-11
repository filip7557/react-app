import Button from "./Button";

function Row({ dog }) {
    

    function onUpdateClick() {
        const name = dog.name;
        const age = dog.age;
        document.getElementById("form").setAttribute("class", "hidden");
        document.getElementById("updateForm").removeAttribute("class");

        document.getElementById("dogNameUpdate").Value = name;
        document.getElementById("dogAgeUpdate").Value = age;
    }


    function deleteDog() {
        const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
            let index;
            dogs.forEach(p => {
                if (p.id === dog.id)
                    index = dogs.indexOf(p);
            })
            dogs.splice(index, 1);
            localStorage.setItem("dogs", JSON.stringify(dogs));
    }

    return (
        <tr>
            <td>{dog.name}</td>
            <td>{dog.age}</td>
            <td><Button text="Update" className="update" onClick={onUpdateClick}/><Button text="Delete" className="delete" onClick={deleteDog}/></td>
        </tr>
    )
}

export default Row;