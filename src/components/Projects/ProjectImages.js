import React from "react";
import PjctImgOne from "../img/Project1.png";
import PjctImgTwo from "../img/Project2.png";
import PjctImgThree from "../img/Project3.png";

function ProjectImagesOne() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={projectOneImg.image.src.PjctImgOne}
        alt={projectOneImg.image.alt}
        height={projectOneImg.image.height}
        width={projectOneImg.image.width}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
export function ProjectImagesTwo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={projectTwoImg.image.src.PjctImgTwo}
        alt={projectTwoImg.image.alt}
        height={projectOneImg.image.height}
        width={projectOneImg.image.width}
        style={{ maxWidth: "100%", height: "150px" }}
      />
    </div>
  );
}

export function ProjectImagesThree() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={projectThreeImg.image.src.PjctImgThree}
        alt={projectThreeImg.image.alt}
        height={projectOneImg.image.height}
        width={projectOneImg.image.width}
        style={{ maxWidth: "100%", height: "150px" }}
      />
    </div>
  );
}

const projectOneImg = {
  image: {
    src: { PjctImgOne },
    alt: "WhiteBoard",
    height: "200px",
    width: "200px",
  },
};

const projectTwoImg = {
  image: {
    src: { PjctImgTwo },
    alt: "WhiteBoard",
  },
};
const projectThreeImg = {
  image: {
    src: { PjctImgThree },
    alt: "ToDo List",
  },
};

export default ProjectImagesOne;
