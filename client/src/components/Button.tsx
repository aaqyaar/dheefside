import React from "react";
import "styles/Button.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "default";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "text" | "outlined" | "contained";
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

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const classes = classNames(
    className,
    "flex gap-3 btn",
    color !== undefined && `btn-${color}`,
    variant !== undefined && `btn-${variant}`,
    size !== undefined && `btn-${size}`,
    fullWidth !== undefined && `btn-block`,
    disabled ? "disabled" : "",
    loading ? "disabled" : ""
  );

  return (
    <button
      onClick={onClick}
      className={classes}
      type={type}
      disabled={disabled || loading}
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
