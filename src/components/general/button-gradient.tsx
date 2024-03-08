"use client"
import { ButtonBase } from "@mui/material";
import { ButtonProps } from "@/types";

const ButtonGradient: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  className,
  variant = "primary",
  ...rest
}) => {
  return (
    <div
      className={`w-full min-w-[150px] min-h-[40px] rounded-[30px]
      bg-gradient-to-r from-[#421C6D] to-[#077167]
      shadow-md
      ${variant === "primary" ? "p-0" : "p-[0.75px]"}
      ${className}`}
    >
      <ButtonBase
        className={`w-full h-full min-h-[40px] rounded-[30px] justify-center items-center normal-case ${
          variant === "primary"
            ? "bg-gradient-to-r from-[#421C6D] to-[#077167]"
            : "bg-white"
        }`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {title && (
          <div
            className={`text-sm ${
              variant === "primary"
                ? "text-white"
                : "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent"
            } font-bold`}
          >
            {title}
          </div>
        )}
      </ButtonBase>
    </div>
  );
};

export default ButtonGradient;
