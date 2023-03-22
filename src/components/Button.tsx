import "./Button.css";

interface ButtonProps {
   title: string;
   color: string;
}

export default function Button({ title, color }: ButtonProps) {
   return (
      <button type="button" className={`btn btn-${color}`}>
         {title}
      </button>
   );
}
