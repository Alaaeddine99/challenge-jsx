import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Alaeddine Maamer</h1>
        <ul className="navmenu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section id="about-me">
        <h1>
          Hello, my name is
          <span className="rotate text-important">Alaeddine Maamer</span>,<br />
          and i make horrible websites.
        </h1>
        <img className="avatar" src="./images/ala.jpg" alt="Alaeddine Maamer" />
      </section>
      <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
          {/* Project Card */}
          <div className="project-card">
            <img src="images/proj1.jpg" alt="project" />
            <h3>test-react</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">https://github.com/Alaaeddine99/test-react.git</a>
            </p>
          </div>
          {/* Project Card */}
          <div className="project-card">
            <img src="images/proj2.jpg" alt="project" />
            <h3>Checkpoint-Network-Requests-in-JavaScript</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">https://github.com/Alaaeddine99/Checkpoint-Network-Requests-in-JavaScript.git</a>
            </p>
          </div>
          {/* Project Card */}
          <div className="project-card">
            <img src="images/proj3.jpg" alt="project" />
            <h3>check-point-express</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">https://github.com/Alaaeddine99/check-point-express.git</a>
            </p>
          </div>
          {/* Project Card */}
          <div className="project-card">
            <img src="./images/proj4.jpg" alt="project" />
            <h3>check-point-mongoose</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">https://github.com/Alaaeddine99/check-point-mongoose.git</a>
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2 className="text-important">Contact me</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Email" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Message</label>
          <textarea rows="5" cols="40"></textarea>
          <button>Send</button>
        </form>
      </section>
      <footer>
        <p>Copyritghts &copy; GOMYCODE 2020</p>
      </footer>
    </div>
  );
}

export default App ;