import { InputHTMLAttributes, useId } from "react";
import "./TextField.css";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const TextField = ({ label, ...inputProps }: TextFieldProps) => {
  const id = useId();

  return (
    <div className="textField">
      <input id={id} {...inputProps} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
