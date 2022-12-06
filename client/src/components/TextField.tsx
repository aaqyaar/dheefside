import React from "react";
import styles from "styles/style";

export enum Component {
  default = "input",
  textarea = "textarea",
  select = "select",
}

interface Ioption {
  value: string;
  label: string;
}

type OptionsT = Ioption extends Component.select ? Ioption[] : [];

export interface ITextField {
  label: string;
  name: string;
  component: "input" | "textarea" | "select";
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "time"
    | "datetime"
    | "file"
    | "checkbox"
    | "radio"
    | "range"
    | "search"
    | "tel"
    | "url";
  placeholder?: string;
  className?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  errors?: { [key: string]: string };
  touched?: { [key: string]: boolean };
  getFieldProps?: (name: string) => any;

  endIcon?: React.ReactNode;

  startIcon?: React.ReactNode;

  options?: OptionsT;
  colSpan?: number;
}

export default function TextField({
  label,
  name,
  component,
  className,
  type,
  placeholder,
  value,
  onChange,
  errors,
  touched,
  rows,
  getFieldProps,
  endIcon,
  startIcon,
  options,
}: ITextField) {
  const error = errors && touched && errors[name] && touched[name];
  const errorText = error ? errors[name] : "";

  return (
    <div className={`${styles.flexCol} items-start space-y-2`}>
      <label htmlFor={name} className="text-gray-700">
        {label}
      </label>
      {component === "input" ? (
        <input
          type={type}
          name={name}
          id={name}
          className={`textfield ${className}}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...getFieldProps?.(name)}
        />
      ) : component === "textarea" ? (
        <textarea
          name={name}
          id={name}
          className={`textfield ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...getFieldProps?.(name)}
          rows={rows}
        />
      ) : component === Component.select ? (
        <select
          name={name}
          id={name}
          className={`textfield ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...getFieldProps?.(name)}
        >
          {options?.map((option: Ioption) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : null}
      {startIcon && <div className="absolute left-2">{startIcon}</div>}
      {endIcon && <div className="absolute right-2 top-10">{endIcon}</div>}

      {error ? <p className="text-red-500">{errorText}</p> : null}
    </div>
  );
}
