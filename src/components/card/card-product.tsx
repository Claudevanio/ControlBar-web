import Image from "next/image";
import { Home } from "@mui/icons-material";
import { IconGradient } from "..";
import { CurrencyUtils } from "@/utils";
import { CardProductProps } from "@/types";
import { Button } from "@mui/material";

const CardProduct = ({
  name,
  price,
  onClick,
  imgProduct,
}: CardProductProps) => {
  return (
    <Button onClick={onClick} className="w-full min-w-[150px] h-[200px]">
      <div className="w-full h-full flex flex-col border border-textPrimary rounded-[20px] justify-center">
        <Image src={imgProduct} alt="product-img" width={75} height={90} />
        <div className="flex w-full flex-row rounded-[60px] bg-background h-6 self-center justify-between border-[0.2px] border-textPrimary">
          <div onClick={() => {}}>
            <IconGradient>
              <Home sx={{ fill: "url(#gradientColors)" }} />
            </IconGradient>
          </div>
          <div className="self-center text-sm text-textSecondary font-bold">
            {"1"}
          </div>
          <div onClick={() => {}}>
            <IconGradient>
              <Home sx={{ fill: "url(#gradientColors)" }} />
            </IconGradient>
          </div>
        </div>
      </div>
    </Button>
  );
};

export default CardProduct;
