import "./TitleSection.css";

interface TitleSectionProps {
   title: string;
   paragraph: string;
   idFragmentLink?: string;
}

export default function TitleSection({
   title,
   paragraph,
   idFragmentLink,
}: TitleSectionProps) {
   return (
      <div className="title-section">
         <h2 id={idFragmentLink} className="title">
            {title}
         </h2>
         <p className="paragraph">{paragraph}</p>
      </div>
   );
}
