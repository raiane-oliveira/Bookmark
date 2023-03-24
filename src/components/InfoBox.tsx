import Button from "./Button";

import "./InfoBox.css";

interface InfoBoxProps {
   title: string;
   paragraph: string;
   img?: string;
   altImg?: string;
   textBtn: string;
}

export default function InfoBox(props: InfoBoxProps) {
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
