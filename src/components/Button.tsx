import "./Button.css";

interface ButtonProps {
  title: string;
  color: string;
  typeBtn?: 'submit' | 'button';
}

export default function Button({ title, color, typeBtn = 'button' }: ButtonProps) {
  return (
    <button type={typeBtn} className={`btn btn-${color}`}>
      {title}
    </button>
  );
}
