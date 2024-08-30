"use client";
import cx from "classnames";
import React, { ReactNode, useMemo } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  bgColor?: string;
  variant?:
    | "invert"
    | "invert-grey"
    | "invert-black"
    | "gray"
    | "primary"
    | "primary-text"
    | "solid";
  size?: "xl" | "lg" | "md" | "sm";
  isLoading?: boolean;
  shadow?: boolean;
  hideTextOnLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children = "Button",
  bgColor,
  onClick = () => {},
  disabled,
  variant = "primary",
  size = "md",
  isLoading,
  type = "button",
  shadow = false,
  hideTextOnLoading = false,
  ...props
}) => {
  const variantStyle = useMemo(() => {
    switch (variant) {
      case "invert":
        return cx(
          "bg-transparent border text-primary-90 border-primary-90 font-medium",
          "disabled:!bg-transparent disabled:border-2 disabled:text-gray-400 disabled:border-gray-200"
        );
      case "invert-grey":
        return "bg-white border-2 text-gray-500 border-gray-300";
      case "invert-black":
        return "bg-white border-2 text-[#494D50] font-medium border-gray-200";
      case "gray":
        return cx(
          "bg-gray-200 text-gray-400",
          "disabled:bg-gray-200 disabled:text-gray-400"
        );
      case "primary-text":
        return cx(
          "bg-transparent text-primary-90 border-2 border-gray-200",
          "disabled:!bg-transparent disabled:text-gray-400"
        );
      case "solid":
        return "bg-primary-90 text-white";
      case "primary":
        return "bg-primary-90 text-white";
      default:
        return cx(
          "enabled:bg-gradient-to-r from-primary-40 via-primary-60 to-primary-90 text-white"
        );
    }
  }, [variant, disabled]);

  const sizeStyle = useMemo(() => {
    switch (size) {
      case "xl":
        return "tex-xl font-medium px-8 h-12";
      case "lg":
        return "tex-lg font-medium px-8 h-10";
      case "sm":
        return "text-xs px-4 py-1 h-6";
      default:
        return "text-sm px-6 h-8";
    }
  }, [size]);

  const hideChildren = hideTextOnLoading ? isLoading : false;

  return (
    <button
      {...props}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cx(
        "flex items-center text-center rounded-lg justify-center leading-6",
        sizeStyle,
        shadow ? "shadow-sm" : "",
        isLoading ? "bg-gray-200 text-gray-400" : bgColor || variantStyle,
        "disabled:!bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 ",
        className
      )}>
      {isLoading && <AiOutlineLoading3Quarters className="animate-spin mr-4" />}
      {!hideChildren && children}
    </button>
  );
};

export default Button;
