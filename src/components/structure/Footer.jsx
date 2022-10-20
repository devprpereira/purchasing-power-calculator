import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="row">
      <hr />
      <div className="col-md-6">
        <span>
          This tool was made by <code>{"<devprpereira>"}</code>, you can find me at my social networks below:{" "}
        </span>
        <br />
        <a
          href="https://www.linkedin.com/in/devprpereira/"
          target={"_blank"}
          className="linkedin"
        >
          <BsLinkedin className="icon" />
        </a>
        <a href="mailto:tec.prpereira@gmail.com" className="gmail">
          <SiGmail className="icon" />
        </a>
        <a
          href="https://github.com/devprpereira"
          target={"_blank"}
          className="github"
        >
          <BsGithub className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
