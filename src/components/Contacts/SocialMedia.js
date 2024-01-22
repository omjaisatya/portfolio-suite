import React from "react";
import { Icon } from "@rsuite/icons";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";

function SocialMedia() {
  return (
    <div>
      <h6>Feel Free to Reach out</h6>
      <SocialIcons />
      <EmailIcon />
    </div>
  );
}

export const SocialIcons = () => (
  <div
    style={{
      backgroundColor: "floralwhite",
      justifyContent: "space-around",
      display: "flex",
      borderRadius: "10px",
      boxShadow: "0 0 10px 0 khaki",
      margin: "10px 0",
      padding: "3px 0",
    }}
    className="icon-example-list"
  >
    {/* FaceBook */}
    <button style={{ backgroundColor: "transparent" }}>
      <a
        href="https://www.facebook.com/profile.php?id=100026056849530"
        rel="noreferrer"
        target="_blank"
      >
        <Icon as={AiFillFacebook} size="2em" style={{ color: "#000" }} />
      </a>
    </button>
    {/* Instagram */}
    <button style={{ backgroundColor: "transparent" }}>
      <a
        href="https://www.instagram.com/omjaisatya/"
        rel="noreferrer"
        target="_blank"
      >
        <Icon as={AiFillInstagram} size="2em" style={{ color: "#000" }} />
      </a>
    </button>
    {/* LinkedIn */}
    <button style={{ backgroundColor: "transparent" }}>
      <a
        href="https://www.linkedin.com/in/satya-prakash451/"
        rel="noreferrer"
        target="_blank"
      >
        <Icon as={AiFillLinkedin} size="2em" style={{ color: "#000" }} />
      </a>
    </button>
    {/* Twitter */}
    <button style={{ backgroundColor: "transparent" }}>
      <a
        href="https://twitter.com/satyaprakash451"
        rel="noreferrer"
        target="_blank"
      >
        <Icon as={AiFillTwitterCircle} size="2em" style={{ color: "#000" }} />
      </a>
    </button>
  </div>
);

export const EmailIcon = () => {
  return (
    <div
      style={{
        backgroundColor: "floralwhite",
        display: "flex",
        // padding: "0 5px",
        alignItems: "center",
        borderRadius: "8px",
        justifyContent: "space-around",
      }}
    >
      <div>
        <Icon
          as={AiOutlineMail}
          size="2em"
          style={{ color: "#000", margin: "0 5px" }}
        />
      </div>
      <div style={{ borderRadius: "10px" }}>
        <div>Mail me at</div>
        <div>
          <a href="mailto:satyaprakash451256@gmail.com">
            satyaprakash451256@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
