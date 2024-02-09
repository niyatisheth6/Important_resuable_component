import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";
import { Size, Variants } from "./types";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: keyof Variants;
  size?: keyof Size;
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonVariants(variant, size), className)}
      {...props}
    >
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
  sm: "text-sm py-2 px-4",
  md: "text-base py-4 px-8",
  lg: "text-lg py-8 px-12",
};

const buttonVariants = (variant: keyof Variants, sizes: keyof Size) => {
  const variantStyles = variants[variant];
  const sizeStyles = size[sizes];
  return variantStyles + " " + sizeStyles;
};
