import InfoBox from "./InfoBox";
import TitleSection from "./TitleSection";
import imgTab1 from "../assets/illustration-features-tab-1.svg";

import "./Features.css";
import { MouseEvent, useState } from "react";

export default function Features() {
   function handleChangeFeature(event: MouseEvent) {
      const target = event.currentTarget;
   }

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
                  className="tab1 tab-selected title-tab-features"
               >
                  Simple Bookmarking
               </span>
               <span
                  onClick={handleChangeFeature}
                  className="tab2 title-tab-features"
               >
                  Speedy Searching
               </span>
               <span
                  onClick={handleChangeFeature}
                  className="tab3 title-tab-features"
               >
                  Easy Sharing
               </span>
            </div>
         </div>

         <InfoBox
            title="Bookmark in one click"
            paragraph="Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favorite sites."
            textBtn="More Info"
            img={imgTab1}
            altImg="Illustration tab 1"
         />
      </article>
   );
}
