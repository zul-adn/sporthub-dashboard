"use client";
/* eslint-disable react/no-unknown-property */
import cx from "classnames";
import React, { FC, HTMLInputTypeAttribute, useMemo } from "react";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Control, Controller } from "react-hook-form";
import {
  regexNumber,
  regexString,
  regexStringNumber,
  regexValidNpwp,
  regexValidEmail,
  regexPhoneNumber
} from '@/app/const';

interface InputProps {
  name: string;
  control: Control<any>;
  acceptNumber?: string;
  acceptSymbol?: string;
  autoComplete?: string;
  className?: string;
  classNameInput?: string;
  disabled?: boolean;
  hideErrorMessage?: string;
  inputTitle?: string;
  isEmail?: string;
  isPhone?: string;
  label?: string;
  min?: number;
  max?: number;
  maxLength?: number;
  multiplier?: number;
  npwpPattern?: string;
  placeholder?: string;
  prefix?: string;
  regex?: string;
  required?: boolean;
  size?: "md" | "lg";
  sufix?: any;
  type?: string;
  uppercase?: boolean;
  onChange?: (_event: any) => void;
  onFocus?: (_event: any) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  disabled = false,
  className = "",
  classNameInput = "",
  name,
  multiplier = undefined,
  control,
  label,
  autoComplete = "off",
  onFocus = () => {},
  prefix = undefined,
  sufix = undefined,
  regex = undefined,
  maxLength = undefined,
  required = false,
  inputTitle = undefined,
  hideErrorMessage = false,
  acceptSymbol = false,
  uppercase = false,
  acceptNumber = true,
  npwpPattern = false,
  isEmail = false,
  isPhone = false,
  size = "md",
  ...rest
}) => {
  const [isFocus, setFocus] = useState(false);
  const [visible, setVisible] = useState(false);
  const Icon = visible ? IoEye : IoEyeOff;

  const [labelStyle, containerStyle, inputStyle] = useMemo(() => {
    switch (size) {
      case "lg":
        return ["tex-md", "h-10", "input-base-lg", "w-full"];
      default:
        return ["text-sm", "h-8", "input-base", "w-full"];
    }
  }, [size]);

  const handlePassword = () => {
    return visible ? "text" : "password";
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, ref, value },
        fieldState: { error },
      }) => {
        return (
          <div className={cx("flex flex-col w-full", labelStyle)}>
            
            <div
              title={inputTitle}
              data-role="input-container"
              data-name={name}
              className={cx(
                "relative px-3 border-2 rounded-lg border-neutral-300 transition",
                isFocus ? "border-neutral-500" : "",
                disabled ? "bg-disableColor-primary" : "bg-white",
                !disabled && !isFocus ? "hover:border-neutral-400" : "",
                error ? "border-error-40" : "",
                containerStyle,
                className
              )}>
              <div className="flex gap-3 items-center h-full ">
                {prefix && (
                  <span className="text-sm font-medium">{prefix}</span>
                )}
                <input
                  {...rest}
                  ref={ref}
                  value={type !== "file" ? value : ""}
                  onChange={(e) => {
                    const newEvent = e;
                    if (type === "integer") {
                      newEvent.target.value = newEvent.target.value.replace(
                        regexNumber,
                        ""
                      );
                    }
                    if (type === "number") {
                      let newValue = Number(newEvent.target.value);
                      if (rest.max && newValue > rest.max) {
                        newValue = rest.max;
                      }
                      if (rest.min && newValue < rest.min) {
                        newValue = rest.min;
                      }
                      newEvent.target.value = `${newValue}`;
                    }
                    if (acceptSymbol) {
                      newEvent.target.value = newEvent.target.value.replace(
                        regexStringNumber,
                        ""
                      );
                    }
                    if (!acceptNumber) {
                      newEvent.target.value = newEvent.target.value.replace(
                        regexString,
                        ""
                      );
                    }
                    if (npwpPattern) {
                      newEvent.target.value = newEvent.target.value.replace(
                        regexValidNpwp,
                        ""
                      );
                    }
                    if (isEmail) {
                      newEvent.target.value = newEvent.target.value.replace(
                        regexValidEmail,
                        ""
                      );
                    }
                    if (isPhone) {
                      newEvent.target.value = newEvent.target.value.replace(
                        regexPhoneNumber,
                        ""
                      );
                    }
                    if (regex) {
                      newEvent.target.value = newEvent.target.value.replace(
                        regex,
                        ""
                      );
                    }
                    if (uppercase) {
                      newEvent.target.value =
                        newEvent.target.value.toUpperCase();
                    }
                    if (type === "file") onChange(e.target.files);
                    else onChange(newEvent);
                    rest.onChange ? rest.onChange(newEvent) : null;
                  }}
                  disabled={disabled}
                  className={cx(
                    "w-full",
                    inputStyle,
                    disabled ? "" : "text-neutral-90",
                    classNameInput
                  )}
                  type={
                    type === "integer"
                      ? "text"
                      : type === "password"
                      ? handlePassword()
                      : type
                  }
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  onFocus={(ev) => {
                    setFocus(true);
                    onFocus(ev);
                  }}
                  onBlur={(ev: any) => {
                    setFocus(false);
                    // onBlur();
                    if (type === "number" && multiplier) {
                      const newEvent = ev;
                      let newValue = Number(newEvent.target.value);
                      newValue = Math.ceil(newValue / multiplier) * multiplier;
                      newEvent.target.value = `${newValue}`;
                      onChange(newEvent);
                    }
                  }}
                  maxLength={maxLength}
                />
                {sufix && <div>{sufix}</div>}
                {type === "password" && (
                  <button
                    type="button"
                    onClick={() => {
                      setVisible(!visible);
                    }}>
                    <Icon className="text-neutral-20 text-xl" />
                  </button>
                )}
              </div>
            </div>
            {error && !hideErrorMessage ? (
              <span className="my-1 text-sm text-error-40">
                {error.message}
              </span>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default Input;
