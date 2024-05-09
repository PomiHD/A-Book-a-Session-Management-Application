import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: string;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & BaseProps;

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
