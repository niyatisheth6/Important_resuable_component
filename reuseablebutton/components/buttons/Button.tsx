import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonsNewProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
    asLink?: boolean;
    href?: string;
  };

export default function Button({
  children,
  className,
  variant,
  size,
  asLink,
  href = "",
  ...props
}: ButtonsNewProps) {
  const commonClasses = twMerge(
    clsx(buttonVariants({ variant, size, className }))
  );
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

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary:
        "border-2 text-3xl font-bold hover:bg-prussianblue text-white bg-bluesapphire w-fit rounded-3xl disabled:opacity-20 disabled:hover:bg-prussianblue",
      success:
        "border text-2xl font-semibold hover:bg-bluesapphire text-white bg-prussianblue w-fit rounded-full disabled:opacity-20 disabled:hover:bg-prussianblue",
      danger:
        "border text-2xl font-semibold hover:bg-red-300 text-white bg-red-500 w-fit rounded-3xl disabled:opacity-20 disabled:hover:bg-red-50",
    },
    size: {
      sm: "text-sm py-2 px-4",
      md: "text-base py-4 px-8",
      lg: "text-lg py-8 px-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});
