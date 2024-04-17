import Project from "../components/project/Project"

import {projects} from "./../helpers/projectslist"

function Projects () {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {/* Вместо index должен быть использован id в случае если элемент берется из таблицы БД */}
          {projects.map((project, index) => {
            return <Project 
                key={index} 
                title={project.title} 
                img={project.img} 
                index={index}
              />;
          })}
          
        </ul>
      </div>
    </main>
  );
}

export default Projects;