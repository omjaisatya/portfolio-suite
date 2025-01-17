import React from "react";
import { Popover, Whisper, Button } from "rsuite";

function ProjectDetailsOne() {
  return (
    <div style={{ textAlign: "center" }}>
      <h6>{projectDetailsOne.name}</h6>
      <p>{projectDetailsOne.description}</p>
      <PjctPopBtnOne />
    </div>
  );
}
export function ProjectDetailsTwo() {
  return (
    <div style={{ textAlign: "center" }}>
      <h6>{projectDetailsTwo.name}</h6>
      <p>{projectDetailsTwo.description}</p>
      <PjctPopBtnTwo />
    </div>
  );
}

export function ProjectDetailsThree() {
  return (
    <div style={{ textAlign: "center" }}>
      <h6>{projectdetailsThree.name}</h6>
      <p>{projectdetailsThree.description}</p>
      <PjctPopBtnThree />
    </div>
  );
}

export function ProjectDetailsFour() {
  return (
    <div style={{ textAlign: "center" }}>
      <h6>{projectdetailsFour.name}</h6>
      <p>{projectdetailsFour.description}</p>
      <PjctPopBtnFour />
    </div>
  );
}

export function ProjectDetailsFive() {
  return (
    <div style={{ textAlign: "center" }}>
      <h6>{projectdetailsFive.name}</h6>
      <p>{projectdetailsFive.description}</p>
      <PjctPopBtnFive />
    </div>
  );
}

const projectDetailsOne = {
  name: "White Board",
  description:
    "Developed a dynamic and collaborative React Whiteboard application using the powerful react-konva library. This project aimed to provide users with an interactive and real-time whiteboard experience, facilitating seamless collaboration and sharing of ideas in both educational and professional settings.Implemented pen, eraser,clear and also download the file .",
  btn: "Go to Link",
};
const projectDetailsTwo = {
  name: "Weather App",
  description:
    "Developed a comprehensive Weather App that provides users with up-to-date weather information using the OpenWeather API. This project aimed to deliver an intuitive and visually appealing interface for users to access current weather conditions, forecasts, and additional details for any location globally.",
  btn: "Go to Link",
};
const projectdetailsThree = {
  name: "ToDo / Task List",
  description:
    "Designed and developed a responsive and feature-rich Todo List application using React, combining modern web technologies to deliver an efficient and intuitive task management experience. The application seamlessly integrates with local storage, ensuring data persistence and user convenience across devices. Technologies Used:-React, Local Storage, JavaScript (ES6+), Responsive Design",
  btn: "Go to link",
};

const projectdetailsFour = {
  name: "Pluse Post",
  description:
    "PlusePost is a blogging application built with the ReactJS. This application allows users to create, read, update, and delete blog posts.It includes features like user authentication and a rich text editor for creating posts.",
  btn: "Go to link",
};

const projectdetailsFive = {
  name: "Chat Connect",
  description:
    "Chat Connect is a real-time chat application built using React, Node.js, Express, Socket.IO, and MongoDB. This project allows users to communicate with each other instantly, with features such as user authentication, real-time messaging, and chat room management.",
  btn: "Go to link",
};

// POPOVER- One Button
const PjctPopBtnOne = () => (
  <Whisper
    followCursor
    speaker={
      <Popover style={{ backgroundColor: "darksalmon" }}>
        {PjctPopBtn.text}
      </Popover>
    }
  >
    <a
      href="https://whiteboard-app-lac.vercel.app/"
      rel="noreferrer"
      target="_blank"
    >
      <Button style={{ marginBottom: "20px" }}>{projectDetailsOne.btn}</Button>
    </a>
  </Whisper>
);

// POPOVER TWO Botton
const PjctPopBtnTwo = () => (
  <Whisper
    followCursor
    speaker={
      <Popover style={{ backgroundColor: "darksalmon" }}>
        {PjctPopBtn.text}
      </Popover>
    }
  >
    <a
      href="https://weather-app-ten-orcin.vercel.app/"
      rel="noreferrer"
      target="_blank"
    >
      <Button style={{ marginBottom: "20px" }}>{projectDetailsOne.btn}</Button>
    </a>
  </Whisper>
);

// Pop Btn Three
const PjctPopBtnThree = () => (
  <Whisper
    followCursor
    speaker={
      <Popover style={{ backgroundColor: "darksalmon" }}>
        {PjctPopBtn.text}
      </Popover>
    }
  >
    <a
      href="https://todo-list-one-pied.vercel.app/"
      rel="noreferrer"
      target="_blank"
    >
      <Button style={{ marginBottom: "20px" }}>{projectDetailsOne.btn}</Button>
    </a>
  </Whisper>
);

// Pop Btn Four
const PjctPopBtnFour = () => (
  <Whisper
    followCursor
    speaker={
      <Popover style={{ backgroundColor: "darksalmon" }}>
        {PjctPopBtn.text}
      </Popover>
    }
  >
    <a href="https://pluse-post.vercel.app/" rel="noreferrer" target="_blank">
      <Button style={{ marginBottom: "20px" }}>{projectDetailsOne.btn}</Button>
    </a>
  </Whisper>
);

// Pop Btn Five
const PjctPopBtnFive = () => (
  <Whisper
    followCursor
    speaker={
      <Popover style={{ backgroundColor: "darksalmon" }}>
        {PjctPopBtn.text}
      </Popover>
    }
  >
    <a
      href="https://chat-connect-pi.vercel.app/"
      rel="noreferrer"
      target="_blank"
    >
      <Button style={{ marginBottom: "20px" }}>{projectDetailsOne.btn}</Button>
    </a>
  </Whisper>
);

const PjctPopBtn = {
  text: "Live Project Site",
};

export default ProjectDetailsOne;
