import "./button.css";
import { ReactNode } from "react";

interface ButtonProps {
  variant: string;
  icon: ReactNode; // Accept JSX elements
  text: string;
}

const Button = ({ variant, icon, text }: ButtonProps) => {
  return (
    <button className={`button ${variant}`}>
      <span>{icon}</span>
      {text}
    </button>
  );
};

export default Button;
