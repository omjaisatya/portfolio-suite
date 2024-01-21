import { FlexboxGrid, Col } from "rsuite";
import Logo from "../img/me-logo.png";
import { Icon } from "@rsuite/icons";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineFilePdf } from "react-icons/ai";
import ResumeFile from "../Resume/satya-resume.pdf";

const Footer = () => (
  <div
    className="show-grid"
    style={{ backgroundColor: "khaki", padding: "40px 0" }}
  >
    <FlexboxGrid justify="space-around">
      <FlexboxGrid.Item as={Col} colspan={24} md={6}>
        <FooterLogo />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col} colspan={24} md={6} smHidden>
        <FooterLink />
      </FlexboxGrid.Item>
    </FlexboxGrid>
    <FooterCopy />
  </div>
);

const FooterLogo = () => {
  return (
    <div style={{ color: "black", paddingBottom: "10px" }}>
      <img src={Logo} alt="MeLogo" height={50} width={100} />
      <p>
        "Transforming Ideas into Experiences." <br /> Creative Developer | UX
        Enthusiast
      </p>
    </div>
  );
};

const FooterLink = () => (
  <div>
    <h6>Important Links</h6>
    <div>
      <button style={{ backgroundColor: "transparent" }}>
        <a
          href="https://github.com/omjaisatya"
          rel="noreferrer"
          target="_blank"
        >
          <Icon as={DiGithubBadge} size="2em" style={{ color: "#000" }} />
          {" - "}
          <span style={{ color: "darkslategray" }}>Github&nbsp;</span>
        </a>
      </button>
    </div>
    <div>
      <ResumeButton />
    </div>
  </div>
);

const FooterCopy = () => (
  <small style={{ display: "flex", justifyContent: "center" }}>
    © 2024 - Built with React by{" - "}
    <a
      href="https://www.linkedin.com/in/satya-prakash451/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <p
        style={{
          padding: "0 3px",
          color: "darkslategray",
        }}
      >
        Satya
      </p>
    </a>
  </small>
);

const ResumeButton = () => {
  return (
    <button download style={{ backgroundColor: "transparent" }}>
      <a href={ResumeFile} rel="noreferrer" target="_blank">
        <Icon as={AiOutlineFilePdf} size="2em" style={{ color: "#000" }} />
        {" - "}
        <span style={{ color: "darkslategray" }}>Resume</span>
      </a>
    </button>
  );
};

export default Footer;
