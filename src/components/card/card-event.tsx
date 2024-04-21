import Image from "next/image";
import { Button } from "@mui/material";
import { DateUtils } from "@/utils";
import { EventProps } from "@/types";

type CardEventProps = {
  event: EventProps;
  onClick?(): void;
};

const CardEvent = ({ event, onClick, ...rest }: CardEventProps) => {
  const {
    imagemEvento,
    dataEvento,
    nomeEvento,
    enderecoEvento,
    bairroEvento,
    cidadeEvento,
    UfEvento,
  } = event;

  return (
    <Button
      onClick={onClick}
      className="bg-background w-full p-1 flex-row h-[8rem] rounded-[20px] shadow-md"
      {...rest}
    >
      <div className="flex flex-row justify-between px-2 w-full">
        <Image
          src={imagemEvento}
          alt="logo-img"
          width={120}
          height={120}
          className="object-cover rounded-[20px]"
        />
        <div className="flex flex-col gap-y-1 p-1 text-start justify-center">
          <div className="text-textPrimary text-xs font-normal">
            {dataEvento}
            {/* {DateUtils.toFormatDate(new Date(dataEvento), "hh:mm")} */}
          </div>
          <div className="text-textPrimary text-sm font-bold">{nomeEvento}</div>
          <div className="text-textPrimary text-[14px] font-normal">
            {enderecoEvento} <br /> {bairroEvento} - {cidadeEvento}/{UfEvento}
          </div>
        </div>
      </div>
    </Button>
  );
};

export default CardEvent;
