import React from "react";

type Props = {
  className?: string;
  parentClassName?: string;
  photoURL?: string;
  name: string;
};

export default function Avatar({
  className,
  parentClassName,
  photoURL,
  name,
}: Props) {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const parentClasses = classNames(
    "inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-primary rounded-full",
    parentClassName
  );

  const childClasses = classNames(
    className,
    photoURL
      ? "p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      : "",
    name ? "font-medium text-gray-600 dark:text-gray-300" : ""
  );

  return (
    <div className={parentClasses}>
      {photoURL !== undefined ? (
        <img
          className={childClasses}
          src="/docs/images/people/profile-picture-5.jpg"
          alt={name}
        />
      ) : (
        <span className={childClasses}>{name.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
}
