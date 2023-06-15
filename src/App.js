import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ReactFullpage from "@fullpage/react-fullpage";

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Detailed description of Project 1',
    github: 'https://github.com/username/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Detailed description of Project 2',
    github: 'https://github.com/username/project2'
  },
]

function App() {
  return (
    <>
      <Navbar />
      <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {350} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <About />
              </div>
              {projects.map(project => (
                <div key={project.id} className="section">
                  <Project project={project} />
                </div>
              ))}
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;