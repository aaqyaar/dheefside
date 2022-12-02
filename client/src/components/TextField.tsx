import React from "react";
import styles from "styles/style";

export enum InputType {
  text = "text",
  password = "password",
  email = "email",
  number = "number",
  tel = "tel",
  date = "date",
  time = "time",
  datetime = "datetime",
  month = "month",
  week = "week",
  url = "url",
  search = "search",
  color = "color",
  range = "range",
  file = "file",
  checkbox = "checkbox",
  radio = "radio",
  submit = "submit",
  reset = "reset",
  button = "button",
}

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
  component?: "input" | "textarea" | "select";
  type: InputType;
  placeholder?: string;
  className?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: { [key: string]: string };
  touched?: { [key: string]: boolean };
  getFieldProps?: (name: string) => any;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  options?: OptionsT;
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
  return (
    <div className={`${styles.flexCol} items-start space-y-4`}>
      <label htmlFor={name} className="text-gray-400">
        {label}
      </label>
      <div className={`relative ${styles.flexRow} items-center`}>
        {component === "input" ? (
          <input
            type={type}
            name={name}
            id={name}
            className={`textfield ${className}`}
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
        {endIcon && <div className="absolute right-2">{endIcon}</div>}
      </div>
      {/* startIcon and endIcon */}

      {touched?.[name] && errors?.[name] ? (
        <p className="text-red-500">{errors?.name}</p>
      ) : null}
    </div>
  );
}
