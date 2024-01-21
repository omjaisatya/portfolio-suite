import React from "react";
import SocialMedia from "./SocialMedia";
// import "../../App.css";

function ContactDes() {
  return (
    <div
      style={{
        backgroundColor: "darksalmon",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h6
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "8px 0",
          color: "#fff",
        }}
      >
        Create something together &#x1F91F;
      </h6>
      <p
        style={{ fontFamily: "cursive", textAlign: "center", margin: "10px 0" }}
      >
        Hey! We are looking forward <br /> to start a project with you{" "}
      </p>
      <h6 className={styles.bootIcon.telephone}>Call Us</h6>
      <p style={{ color: "khaki" }}>+91-7255804817</p>
      <h6 className={styles.bootIcon.location}>Location</h6>
      <p style={{ color: "khaki" }}>New Delhi, India 110062</p>
      <SocialMedia />
    </div>
  );
}

const styles = {
  bootIcon: {
    location: "bi bi-geo-alt-fill",
    telephone: "bi bi-telephone-fill",
  },
};

export default ContactDes;
