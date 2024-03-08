import { Button } from "@mui/material";
import { CardOptionProps } from "@/types";

const CardOption = ({
  title,
  children,
  onClick,
  className,
  ...rest
}: CardOptionProps) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-white w-[150px] h-[125px] rounded-[20px] justify-evenly items-center shadow-md flex flex-col ${className} normal-case`}
      {...rest}
    >
      {children}
      <div className="text-sm font-bold text-center self-center bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent">
        {title}
      </div>
    </Button>
  );
};

export default CardOption;
