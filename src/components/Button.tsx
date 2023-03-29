import "./Button.css";

interface ButtonProps {
  title: string;
  color: string;
  typeBtn?: string;
}

export default function Button({ title, color, typeBtn }: ButtonProps) {
  return (
    <button type={typeBtn ? typeBtn : "button"} className={`btn btn-${color}`}>
      {title}
    </button>
  );
}
