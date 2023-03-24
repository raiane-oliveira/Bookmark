import Button from "./Button";
import "./BoxExtension.css";

interface BoxExtensionProps {
   title: string;
   subtitle: string;
   img: string;
   imgAlt: string;
}

export default function BoxExtension(props: BoxExtensionProps) {
   return (
      <div className="box-extension">
         <img src={props.img} alt={props.imgAlt} />
         <h3 className="title-box-extension">{props.title}</h3>
         <span>{props.subtitle}</span>
         <Button title="Add & Install Extension" color="blue" />
      </div>
   );
}
