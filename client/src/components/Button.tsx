import React from "react";

enum variants {
  "text",
  "outlined",
  "contained",
}
type Props = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "default";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: variants | "text" | "outlined" | "contained";
  onClick?: () => void;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export default function Button({ children, ...props }: Props) {
  const {
    className,
    color,
    disabled,
    fullWidth,
    size,
    variant,
    onClick,
    type,
    loading,
    startIcon,
    endIcon,
  } = props;
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${color ? `btn-${color}` : ""}
    } ${disabled || loading ? "disabled" : ""} ${fullWidth ? "btn-block" : ""} 
    } ${size ? `btn-${size}` : ""} ${variant ? `btn-${variant}` : ""}
      `}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 2a9.99 9.99 0 019.9 8.2l-2.1.4A7.99 7.99 0 0012 4a8 8 0 00-7.8 6H2v2h2.2A8 8 0 0012 20a8 8 0 007.8-6.2l2.1.4A9.99 9.99 0 0112 22a10 10 0 01-9.9-8H2v-2h2.1A10 10 0 0112 2z"
            />
          </svg>
          <span> Loading....</span>
        </>
      ) : (
        <>
          {startIcon && <span className="startIcon">{startIcon}</span>}
          {children}
          {endIcon && <span className="endIcon">{endIcon}</span>}
        </>
      )}
    </button>
  );
}
