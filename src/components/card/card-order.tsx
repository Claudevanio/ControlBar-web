import { Button } from "@mui/material";
import { CardOrderProps } from "@/types";
import { CurrencyUtils, DateUtils } from "@/utils";

const CardOrder = ({
  onClick,
  nameEvent,
  dateEvent,
  dateOrder,
  valueOrder,
  numberOrder,
  quantityItems,
  ...rest
}: CardOrderProps) => {
  return (
    <Button
      onClick={onClick}
      className="bg-background w-full flex-row p-0 h-28 rounded-[20px] shadow-md normal-case"
      {...rest}
    >
      <div className="flex flex-row justify-between p-2 w-full h-full rounded-[20px] border border-textPrimary">
        <div className="flex flex-col gap-y-1 p-2 text-start justify-center">
          <div className="text-textPrimary text-xs font-normal">
            {DateUtils.toFormatDate(dateOrder, "DD/MM/YYYY")} às{" "}
            {DateUtils.toFormatDate(dateOrder, "hh:mm")}
          </div>
          <div className="text-textPrimary text-base font-bold">
            {quantityItems} {quantityItems > 1 ? "ITENS" : "ITEM"} |{" "}
            {CurrencyUtils.toCurrency(valueOrder)}
          </div>
          <div className="text-textPrimary text-xs font-normal">
            Evento: {nameEvent} -{" "}
            {DateUtils.toFormatDate(dateEvent, "DD/MM/YY")}
          </div>
        </div>
        <div className="font-sm text-primaryLight font-bold py-3">
          Nº {numberOrder}
        </div>
      </div>
    </Button>
  );
};

export default CardOrder;
