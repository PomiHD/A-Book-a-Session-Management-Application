import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: string;
};

// https://stackoverflow.com/questions/65805600/what-does-to-never-mean-in-typescript
// By setting to?: never in ButtonProps,
// TypeScript will give a compile error if you try to provide a 'to' prop when you are using the Button component as a button.
// This helps to ensure that you are using the Button component correctly.
type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };

type ButtonLinkProps = LinkProps &
  BaseProps & {
    to: string;
  };

function isRouterLink(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}
export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  const { children, textOnly, ...otherProps } = props;
  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
