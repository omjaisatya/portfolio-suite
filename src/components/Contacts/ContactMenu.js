import React from "react";
import { FlexboxGrid, Col } from "rsuite";
import ContactDes from "./ContactDes";
import ContactForm from "./ContactForm";

const ContactMenu = () => (
  <div className="show-grid">
    <h2 style={{ textAlign: "center", padding: "10px" }}>Get In Touch</h2>
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item as={Col} colspan={24} md={6}>
        <ContactDes />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} md={6} smHidden>
        <ContactForm />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  </div>
);

export default ContactMenu;
