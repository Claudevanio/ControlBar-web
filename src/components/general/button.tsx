"use client"
import { ButtonBase } from "@mui/material";
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
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
      bg-white 
      ${
        variant === "primary"
          ? "border-2 border-[#9CA3A7]"
          : "border border-[#5A2491]"
      }
      ${className}`}
    >
      <ButtonBase
        className="w-full h-full rounded-[30px] justify-center items-center normal-case"
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {title && (
          <div
            className={`text-sm ${
              variant === "primary" ? "text-[#39474F]" : "text-[#5A2491]"
            } font-bold`}
          >
            {title}
          </div>
        )}
      </ButtonBase>
    </div>
  );
};

export default Button;
