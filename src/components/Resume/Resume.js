import React, { useState } from "react";
import resume from "./satya-resume.pdf";

function Resume() {
  return (
    <div>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          height: "auto",
          width: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <object data={resume} type="application/pdf" width="auto" height="auto">
          Resume not loaded in Small Device, to view PDF inside this Modal{" "}
          <br /> Kindly Use Big Device or You can Download PDF.
        </object>
      </div>
    </div>
  );
}

export const ResumeButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMoveEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <button
      download
      style={{
        border: "1px solid red",
        borderRadius: "10px",
        padding: "8px",
        marginTop: "5px",
        animation: "ease-in",
        transition: "1s all",
        backgroundColor: isHovering ? "white" : "darksalmon",
      }}
      onMouseEnter={handleMoveEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        style={{ color: isHovering ? "red" : "white" }}
        href={resume}
        rel="noreferrer"
        target="_blank"
      >
        {isHovering ? "Click to Download" : "Download Resume"}
      </a>
    </button>
  );
};

export default Resume;
