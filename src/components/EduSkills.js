import React from "react";
import Education from "./Education";
import Skills from "./Skills";
// import Container from "rsuite/Container";

function EduSkills() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Education />
      <Skills />
    </div>
  );
}

export default EduSkills;
