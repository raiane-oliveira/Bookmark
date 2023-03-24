import InfoBox from "./InfoBox";
import TitleSection from "./TitleSection";
import imgTab1 from "../assets/illustration-features-tab-1.svg";

import "./Features.css";

export default function Features() {
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
               <span className="tab1 tab-selected title-tab-features">
                  Simple Bookmarking
               </span>
               <span className="tab2 title-tab-features">Speedy Searching</span>
               <span className="tab3 title-tab-features">Easy Sharing</span>
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
