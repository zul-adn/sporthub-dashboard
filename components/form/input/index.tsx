"use client";
/* eslint-disable react/no-unknown-property */
import cx from "classnames";
import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes, useMemo } from "react";
import { Control, Controller } from "react-hook-form";
import IconLockDots from "@/components/icon/icon-lock-dots";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  className?: string;
  label?: string;
  icon?: any
}

const Input: FC<InputProps> = ({
  className = "",
  name,
  control,
  label,
  children,
  icon,
  ...rest
}) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, ref, value },
        fieldState: { error },
      }) => {
        return (
          <div>
            <label htmlFor={name}>{label}</label>
            <div className="relative text-white-dark">
              <input
                id={name}
                ref={ref}
                value={value}
                className={cx(
                  "form-input  placeholder:text-white-dark",
                  `${icon && "ps-10"}`,
                  `${
                    error &&
                    "border-danger "
                  }`,
                  className
                )}
                onChange={onChange}
                {...rest}
              />
              <span className="absolute start-4 top-1/2 -translate-y-1/2">
                {icon}
              </span>
            </div>
            {error ? (
              <span className="text-sm text-danger mt-1">{error.message}</span>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default Input;
