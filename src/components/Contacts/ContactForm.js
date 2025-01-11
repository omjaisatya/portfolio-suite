import React from "react";
import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMoveEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  // State for form fields
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        values,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div
      style={{
        backgroundColor: "floralwhite",
        padding: "13px",
        borderRadius: "10px",
      }}
    >
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h5 style={{ textAlign: "center" }}>Send us message</h5>
        <InputField
          value={values.fullName}
          handleChange={handleChange}
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="John Doe"
        />
        <InputField
          value={values.email}
          handleChange={handleChange}
          label="E-Mail"
          name="email"
          type="email"
          placeholder="jphn@example.com"
        />
        <TextareaField
          value={values.message}
          handleChange={handleChange}
          label="Your message here"
          name="message"
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            backgroundColor: isHovering ? "white" : "darksalmon",
            color: isHovering ? "black" : "white",
            borderRadius: "15px",
            padding: "10px",
            animation: "ease-in",
            transition: "1s all",
            border: isHovering ? "1px solid red" : "none",
            justifyContent: "end",
            alignContent: "center",
          }}
          onMouseEnter={handleMoveEnter}
          onMouseLeave={handleMouseLeave}
        >
          Send <i className="bi bi-send"></i>
        </button>
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div
    style={{
      padding: "10px",
      color: "white",
      backgroundColor: "blue",
      borderRadius: "10px",
      textAlign: "center",
      position: "absolute",
      zIndex: "1",
      top: "20px",
    }}
  >
    <p>Your message submitted successfully</p>
  </div>
);

export default ContactForm;
