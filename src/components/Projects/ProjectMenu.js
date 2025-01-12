import React from "react";
import ProjectListsOne, {
  ProjectListsFive,
  ProjectListsFour,
  ProjectListsThree,
  ProjectListsTwo,
} from "./ProjectLists";

function ProjectMenu() {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        Projects
      </h2>
      <ProjectListsOne />
      <ProjectListsTwo />
      <ProjectListsThree />
      <ProjectListsFour />
      <ProjectListsFive />
    </div>
  );
}

export default ProjectMenu;
