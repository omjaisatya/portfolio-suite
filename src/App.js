import React from "react";
import { CustomProvider, Container } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Navi from "./components/Navi";
import "./App.css";
import EduSkills from "./components/EduSkills";
import Projects from "./components/Projects";
import ContactMenu from "./components/Contacts/ContactMenu";
import HomeMenu from "./components/HomeMenu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CustomProvider theme="light">
      <Container className="app">
        <header className="app-header">
          <Navi />
          <HomeMenu />
          <Projects />
          <EduSkills />
          <ContactMenu />
          <Footer />
        </header>
      </Container>
    </CustomProvider>
  );
}

export default App;
