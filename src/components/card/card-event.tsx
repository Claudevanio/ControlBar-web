import Image from "next/image";
import { Button } from "@mui/material";
import { CardEventProps } from "@/types";
import { DateUtils } from "@/utils";

const CardEvent = ({
  imgEvent,
  dateEvent,
  nameEvent,
  location,
  onClick,
  ...rest
}: CardEventProps) => {
  return (
    <Button
      onClick={onClick}
      className="bg-background w-full p-1 flex-row h-[125px] rounded-[20px] shadow-md"
      {...rest}
    >
      <div className="flex flex-row justify-between gap-2 w-full">
        <Image
          src={imgEvent}
          alt="logo-img"
          width={0}
          height={0}
          className="w-[120px] h-full object-contain rounded-[20px]"
        />
        <div className="flex flex-col gap-y-1 p-1 text-start justify-center">
          <div className="text-[#39474F] text-xs font-normal">
            {DateUtils.toFormatDate(dateEvent, "DD/MM/YYYY")} às{" "}
            {DateUtils.toFormatDate(dateEvent, "hh:mm")}
          </div>
          <div className="text-[#39474F] text-sm font-bold">{nameEvent}</div>
          <div className="text-[#39474F] text-sm font-normal">{location}</div>
        </div>
      </div>
    </Button>
  );
};

export default CardEvent;
