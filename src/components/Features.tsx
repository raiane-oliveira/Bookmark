import TitleSection from "./TitleSection";
import imgTab1 from "../assets/illustration-features-tab-1.svg";
import imgTab2 from "../assets/illustration-features-tab-2.svg";
import imgTab3 from "../assets/illustration-features-tab-3.svg";

import "./Features.css";
import { MouseEvent, useState } from "react";
import Button from "./Button";

interface InfoBoxProps {
  title: string;
  paragraph: string;
  img?: string;
  altImg?: string;
  textBtn: string;
}

export default function Features() {
  const [tab, setTab] = useState(
    <InfoBox
      title="Bookmark in one click"
      paragraph="Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favorite sites."
      textBtn="More Info"
      img={imgTab1}
      altImg="Illustration tab 1"
    />
  );
  const [tabClasses, setTabClasses] = useState({
    tab1: "tab1 tab-selected title-tab-features",
    tab2: "tab2 title-tab-features",
    tab3: "tab3 title-tab-features",
  });

  function handleChangeFeature(e: MouseEvent) {
    const target = e.currentTarget;
    const tab = target.getAttribute("data-tab");
    if (tab === "2") {
      setTab(
        <InfoBox
          title="Intelligent search"
          paragraph="Our powerful search feature will help you find saved sites in no time at all.
          No need to trawl through all of your bookmarks."
          textBtn="More Info"
          img={imgTab2}
          altImg="Illustration tab 2"
        />
      );

      setTabClasses({
        tab1: "tab1 title-tab-features",
        tab2: "tab2 tab-selected title-tab-features",
        tab3: "tab3 title-tab-features",
      });
    } else if (tab === "3") {
      setTabClasses({
        tab1: "tab1 title-tab-features",
        tab2: "tab2 title-tab-features",
        tab3: "tab3 tab-selected title-tab-features",
      });

      setTab(
        <InfoBox
          title="Share your bookmarks"
          paragraph="Easily share your bookmarks and collections with others.
          Create a shareable link that you can send at the click of a button."
          textBtn="More Info"
          img={imgTab3}
          altImg="Illustration tab 3"
        />
      );
    } else if (tab === "1") {
      setTabClasses({
        tab1: "tab1 tab-selected title-tab-features",
        tab2: "tab2 title-tab-features",
        tab3: "tab3 title-tab-features",
      });
      setTab(
        <InfoBox
          title="Bookmark in one click"
          paragraph="Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favorite sites."
          textBtn="More Info"
          img={imgTab1}
          altImg="Illustration tab 1"
        />
      );
    }
  }

  console.log("Renderizou");

  return (
    <article className="features-bookmark">
      <TitleSection
        title="Features"
        paragraph="Our aim is to make it quick and easy for you to access your favorite websites. 
                     Your bookmarks sync between your devices so you can access them on the go."
        idFragmentLink="features"
      />
      <div className="wrapper">
        <div className="tabs-features">
          <span
            onClick={handleChangeFeature}
            data-tab={1}
            className={tabClasses.tab1}
          >
            Simple Bookmarking
          </span>
          <span
            onClick={handleChangeFeature}
            data-tab={2}
            className={tabClasses.tab2}
          >
            Speedy Searching
          </span>
          <span
            onClick={handleChangeFeature}
            data-tab={3}
            className={tabClasses.tab3}
          >
            Easy Sharing
          </span>
        </div>
      </div>

      {tab}
    </article>
  );
}

function InfoBox(props: InfoBoxProps) {
  return (
    <div className={`info-box`}>
      <img src={props.img} alt={props.altImg} />
      <div className="text-info-box">
        <h2 className="title">{props.title}</h2>
        <p className="paragraph">{props.paragraph}</p>
        <Button title={props.textBtn} color="blue" />
      </div>
    </div>
  );
}
