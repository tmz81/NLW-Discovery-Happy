import { ButtonHTMLAttributes } from "react";
import "../styles/button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonPrimary({ children, ...props }: ButtonProps) {
  return (
    <button className="ButtonPrimary" {...props}>
      {children}
    </button>
  );
}
