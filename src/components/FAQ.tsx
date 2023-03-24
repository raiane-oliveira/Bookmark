import TitleSection from "./TitleSection";
import "./FAQ.css";
import Button from "./Button";
import { MouseEvent } from "react";

interface QuestionProps {
   title: string;
   content: string;
}

export default function FAQ() {
   return (
      <article className="FAQ-section">
         <TitleSection
            title="Frequently Asked Questions"
            paragraph="Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us."
         />
         <ul className="questions">
            <Question
               title="What is Bookmark?"
               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
               justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            />
            <Question
               title="How can I request a new browser?"
               content="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
               Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
               ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
               Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            />
            <Question
               title="Is there a mobile app?"
               content="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
               urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
               sollicitudin ex et ultricies bibendum."
            />
            <Question
               title="What about other Chromium browsers?"
               content="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
               vitae neque eget nisl gravida pellentesque non ut velit."
            />
         </ul>

         <Button title="More Info" color="blue" />
      </article>
   );
}

function Question({ title, content }: QuestionProps) {
   function handleOpenQuestion(event: MouseEvent) {
      const target = event.currentTarget;
      target.classList.toggle("opened");
   }

   return (
      <li className="question" onClick={handleOpenQuestion}>
         <h4 className="title-question">{title}</h4>
         <p className="content-question">{content}</p>
      </li>
   );
}
