import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import { Size, Variants } from "./types";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: keyof Variants;
  size?: keyof Size;
  asLink?: boolean;
  href?: string;
};

export default function Buttons({
  children,
  className,
  variant = "primary",
  size = "md",
  asLink,
  href = "",
  ...props
}: ButtonProps) {
  const commonClasses = clsx(buttonVariants(variant, size), className);

  if (asLink) {
    return (
      <Link
        href={href}
        className={commonClasses}
        {...(props as React.HTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
}

const variants: Variants = {
  primary:
    "border-2 text-3xl font-bold hover:bg-prussianblue text-white bg-bluesapphire w-fit rounded-3xl disabled:opacity-20 disabled:hover:bg-prussianblue",
  success:
    "border text-2xl font-semibold hover:bg-bluesapphire text-white bg-prussianblue w-fit rounded-full disabled:opacity-20 disabled:hover:bg-prussianblue",
  danger:
    "border text-2xl font-semibold hover:bg-red-300 text-white bg-red-500 w-fit rounded-3xl disabled:opacity-20 disabled:hover:bg-red-50",
};

const size: Size = {
  sm: "py-2 px-4",
  md: "py-4 px-[60px]",
  lg: "py-8 px-12",
};

const buttonVariants = (variant: keyof Variants, sizes: keyof Size) => {
  const variantStyles = variants[variant];
  const sizeStyles = size[sizes];
  return variantStyles + " " + sizeStyles;
};
