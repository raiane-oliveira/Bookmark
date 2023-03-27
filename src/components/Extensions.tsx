import TitleSection from "./TitleSection";

import chromeImg from "../assets/logo-chrome.svg";
import firefoxImg from "../assets/logo-firefox.svg";
import operaImg from "../assets/logo-opera.svg";

import "./Extensions.css";
import Button from "./Button";

interface BoxExtensionProps {
  title: string;
  subtitle: string;
  img: string;
  imgAlt: string;
}

export default function Extensions() {
  return (
    <article className="extensions-section">
      <TitleSection
        title="Download the extension"
        paragraph="We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                  got a favorite you’d like us to prioritize."
        idFragmentLink="extension"
      />
      <div className="wrapper-extensions">
        <BoxExtension
          title="Add to Chrome"
          subtitle="Minimum version 62"
          imgAlt="Logo Chrome"
          img={chromeImg}
        />
        <BoxExtension
          title="Add to Firefox"
          subtitle="Minimum version 55"
          imgAlt="Logo Firefox"
          img={firefoxImg}
        />
        <BoxExtension
          title="Add to Opera"
          subtitle="Minimum version 46"
          imgAlt="Logo Opera"
          img={operaImg}
        />
      </div>
    </article>
  );
}

function BoxExtension(props: BoxExtensionProps) {
  return (
    <div className="box-extension">
      <img src={props.img} alt={props.imgAlt} />
      <h3 className="title-box-extension">{props.title}</h3>
      <span>{props.subtitle}</span>
      <Button title="Add & Install Extension" color="blue" />
    </div>
  );
}
