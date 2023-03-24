import Button from "./Button";
import illustrationHero from "../assets/illustration-hero.svg";

import "./Introduction.css";

export default function Introduction() {
   return (
      <article className="introduction-bookmark">
         <section className="text-introduction">
            <h1 className="title-text-introduction">
               A Simple Bookmark Manager
            </h1>
            <p>
               A clean and simple interface to organize your favorite websites.
               Open a new browser tab and see your sites load instantly. Try it
               for free.
            </p>

            <div className="btns-introduction">
               <Button title="Get it on Chrome" color="blue" />
               <Button title="Get it on Firefox" color="gray" />
            </div>
         </section>
         <img src={illustrationHero} alt="Illustration Hero" />
      </article>
   );
}
