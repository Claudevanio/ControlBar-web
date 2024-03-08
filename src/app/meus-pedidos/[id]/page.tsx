"use client";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { ArrowBack, Home } from "@mui/icons-material";
import { CurrencyUtils, DateUtils } from "@/utils";
import productPic from "@/assets/product-img.png";
import { IconGradient } from "@/components";

type Order = {
  nameEvent: string;
  dateEvent: string;
  dateOrder: string;
  totalQuantityItems: number;
  valueOrder: number;
  numberOrder: number;
  isActive: boolean;
  itens: Product[];
};

type Product = {
  img: string | StaticImageData;
  name: string;
  mark: string;
  value: number;
  description: string;
  quantity: number;
};

const ordersData: Order = {
  nameEvent: "Show Enrique e Juliano",
  dateEvent: "2023/12/29",
  dateOrder: "2023/12/31",
  numberOrder: 3045,
  totalQuantityItems: 4,
  valueOrder: 259,
  isActive: true,
  itens: [
    {
      img: productPic,
      name: "Bebida - Whisky Escocês",
      value: 89.99,
      mark: "Ballantines",
      quantity: 1,
      description:
        "Whisky Escocês Blended Finest By Shawna X Ballantine's Garrafa 750 ml",
    },
    {
      img: productPic,
      name: "Bebida - Whisky Escocês",
      value: 89.99,
      mark: "Ballantines",
      quantity: 1,
      description:
        "Whisky Escocês Blended Finest By Shawna X Ballantine's Garrafa 750 ml",
    },
    {
      img: productPic,
      name: "Bebida - Whisky Escocês",
      value: 89.99,
      mark: "Ballantines",
      quantity: 3,
      description:
        "Whisky Escocês Blended Finest By Shawna X Ballantine's Garrafa 750 ml",
    },
    {
      img: productPic,
      name: "Bebida - Whisky Escocês",
      value: 89.99,
      mark: "Ballantines",
      quantity: 2,
      description:
        "Whisky Escocês Blended Finest By Shawna X Ballantine's Garrafa 750 ml",
    },
  ],
};

const MeusPedidosDetalhesPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const handlePath = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-8 p-[10%] h-full items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <IconButton onClick={() => handlePath("/meus-pedidos")}>
                <IconGradient>
                  <ArrowBack
                    sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                  />
                </IconGradient>
              </IconButton>
              <p className="text-base text-primaryLight font-bold">
                Meus pedidos - Nº {params.id}
              </p>
            </div>
            <IconButton onClick={() => handlePath("/home")}>
              <IconGradient>
                <Home
                  sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                />
              </IconGradient>
            </IconButton>
          </div>
          <div className="flex flex-col w-full justify-start items-start gap-2">
            <div className="text-base text-primaryLight font-bold mb-2">
              Nº {params.id}
            </div>
            <div className="text-textPrimary text-xs font-normal">
              {DateUtils.toFormatDate(ordersData.dateOrder, "DD/MM/YYYY")} às{" "}
              {DateUtils.toFormatDate(ordersData.dateOrder, "hh:mm")}
            </div>
            <div className="text-textPrimary text-base font-bold">
              {ordersData.totalQuantityItems}{" "}
              {ordersData.totalQuantityItems > 1 ? "ITENS" : "ITEM"} |{" "}
              {CurrencyUtils.toCurrency(ordersData.valueOrder)}
            </div>
            <div className="text-textPrimary text-xs font-normal">
              Evento: {ordersData.nameEvent} -{" "}
              {DateUtils.toFormatDate(ordersData.dateEvent, "DD/MM/YY")}
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-x-8 gap-y-4">
            {ordersData.itens.map((value, index) => (
              <div
                key={index}
                className="flex flex-col rounded-[12px] border border-textPrimary items-center text-center"
              >
                <Button
                  className="flex flex-col p-4 justify-center items-center"
                  onClick={() => handlePath(`/produtos/bebidas/${value.name}`)}
                >
                  <Image
                    src={value.img}
                    alt="product-img"
                    width={75}
                    height={90}
                  />
                  <div className="w-1/2 text-[10px] font-normal text-textTertiary">
                    {value.name}
                  </div>
                  <div className="text-[10px] font-bold text-info">
                    {CurrencyUtils.toCurrency(value.value)}
                  </div>
                </Button>
                <div className="w-full h-[30px] border-t border-t-textPrimary flex flex-row rounded-b-[12px] justify-center items-center text-base text-textSecondary font-bold">
                  {value.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MeusPedidosDetalhesPage;
