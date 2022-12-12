export default function Grid(
  props: {
    children: React.ReactNode;
    className?: string;
    container?: boolean;
    xs?: boolean | number | "auto" | undefined;
    sm?: boolean | number | "auto" | undefined;
    md?: boolean | number | "auto" | undefined;
    lg?: boolean | number | "auto" | undefined;
    xl?: boolean | number | "auto" | undefined;
    spacing?: number;
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    justify?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    alignContent?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "stretch"
      | "space-between"
      | "space-around";
    placeContent?: "center" | "start" | "end";

    placeItems?: "center" | "start" | "end";
  } & React.HTMLAttributes<HTMLDivElement>
) {
  const {
    children,
    className,
    container,
    xs,
    sm,
    md,
    lg,
    xl,
    spacing,
    direction,
    justify,
    alignItems,
    alignContent,
    placeContent,
    placeItems,
    ...other
  } = props;

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  const classes = classNames(
    className,
    container && "grid",
    xs !== undefined && `grid-cols-${xs}`,
    sm !== undefined && `sm:grid-cols-${sm}`,
    md !== undefined && `md:grid-cols-${md}`,
    lg !== undefined && `lg:grid-cols-${lg}`,
    xl !== undefined && `xl:grid-cols-${xl}`,
    spacing !== undefined && `gap-${spacing}`,
    direction !== undefined && `grid-${direction}`,
    justify !== undefined && `justify-${justify}`,
    alignItems !== undefined && `items-${alignItems}`,
    alignContent !== undefined && `content-${alignContent}`,
    placeContent !== undefined && `place-content-${placeContent}`,
    placeItems !== undefined && `place-items-${placeItems}`
  );

  console.log(classes);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
}
