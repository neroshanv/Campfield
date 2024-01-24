import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    // undefined means we are doing nothing
    selectedProjectId: undefined,
    // new projects created here
    projects: []
  });

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        //so we don't lose old state by spreading the old state into this newly returned state object
        ...prevState,
        // null means we are adding a new project
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  }




  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  // Delete button
  // need to add function to the app component 
  // a function which edits projectsState and removes a project.
  // we need to pass that function to the SelectedProject component 
  function handleDelectProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        // undefined is set so we no longer select that project.
        selectedProjectId: undefined,
        // filter method is like map and find built into vanilla JS
        // how does it work: it takes a function as an input just like map and find and this function will be executed for every item in the projects array.
        // true : if we want to keep the item
        // false : if we want to drop the item
        // if these IDs do match, i'm looking at the item that should be deleted and thanks to !== i'm returning false and the item will be dropped.
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }


  // JS code you can use to finding an element in an array by id
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} onDelete={handleDelectProject} />
  // we want to add a new project
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
