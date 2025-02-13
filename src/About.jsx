import "./App.css";
import "./About.css";

import NavBar from "./NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="App App-header">
        <h1>About us</h1>
        <p>
          Welcome to Dog Shelter, a loving shelter dedicated to rescuing,
          rehabilitating, and rehoming dogs in need. Our mission is to provide
          every dog with a second chance at a happy and healthy life. Founded by
          passionate animal lovers, we work tirelessly to rescue abandoned,
          stray, and neglected dogs, offering them medical care, love, and a
          safe place to stay until they find their forever homes. At Paws Haven,
          we believe that every dog deserves a family. Whether you’re looking to
          adopt, foster, or support us through donations and volunteering, your
          help makes a world of difference. Join us in giving these wonderful
          dogs the love they deserve! 🐾
        </p>
      </div>
    </div>
  );
}

export default About;
