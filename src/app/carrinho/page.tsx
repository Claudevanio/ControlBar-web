"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, IconButton } from "@mui/material";
import {
  Add,
  Room,
  Clear,
  Remove,
  ArrowBack,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { IconGradient, ButtonGradient, Modal } from "@/components";
import productPic from "@/assets/product-img.png";
import { CardProductProps } from "@/types";
import { CurrencyUtils } from "@/utils";
import { useModal } from "@/core";

const productsDetails: CardProductProps[] = [
  {
    imgProduct: productPic,
    name: "Whisky Escocês Blended Finest...",
    price: 89.99,
  },
  {
    imgProduct: productPic,
    name: "Whisky Escocês Blended Finest...",
    price: 89.99,
  },
  {
    imgProduct: productPic,
    name: "Whisky Escocês Blended Finest...",
    price: 89.99,
  },
  {
    imgProduct: productPic,
    name: "Whisky Escocês Blended Finest...",
    price: 89.99,
  },
];

type Event = {
  nameEvent: string;
  dateEvent: string;
};

const eventDetails: Event = {
  nameEvent: "Show Enrique e Juliano",
  dateEvent: "2023/03/06",
};

const PedidoPage = () => {
  const router = useRouter();
  const [isOpenModal, openModal, closeModal] = useModal();

  const handlePath = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
        <div className="bg-white w-[450px] min-h-screen">
          <div className="flex flex-col gap-y-8 p-[10%] h-full items-center">
            <div className="w-full flex flex-row gap-2 justify-start items-center align-middle">
              <IconButton onClick={() => handlePath("/home")}>
                <IconGradient>
                  <ArrowBack
                    sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                  />
                </IconGradient>
              </IconButton>
              <div className="flex flex-col justify-center items-center align-middle gap-1">
                <div className="flex flex-row px-2 bg-primaryLight h-9 w-5/6 rounded-[15px] justify-between items-center align-middle">
                  <div className="flex flex-row w-5/12 justify-center gap-2 border-r-4 border-white">
                    <IconGradient>
                      <ShoppingCartOutlined
                        className="text-white"
                        sx={{
                          height: 24,
                          width: 24,
                        }}
                      />
                    </IconGradient>
                    <div className="text-xl text-white font-bold">{0}</div>
                  </div>
                  <div className="flex flex-row w-7/12 text-base text-white font-bold p-2">
                    {CurrencyUtils.toCurrency(254)}
                  </div>
                </div>
                <div className="w-full flex flex-row gap-2 justify-center items-center align-middle">
                  <Room className="text-primary w-4 h-4" />
                  <p className="text-textPrimary font-normal text-base">
                    Evento: {eventDetails.nameEvent}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full gap-8 grid grid-cols-2 grid-rows-2">
              {productsDetails.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-[12px] border border-textPrimary items-center text-center"
                >
                  <div
                    className="h-8 w-8 bg-danger rounded-tr-[12px] rounded-bl-[20px] flex self-end justify-center items-center"
                    onClick={openModal}
                  >
                    <Clear
                      className="text-white"
                      sx={{
                        height: 12,
                        width: 12,
                      }}
                    />
                  </div>
                  <Image
                    src={value.imgProduct}
                    alt="product-img"
                    width={75}
                    height={90}
                  />
                  <div className="w-1/2 text-[10px] font-normal text-textTertiary">
                    {value.name}
                  </div>
                  <div className="text-sm font-bold text-primaryLight">
                    {CurrencyUtils.toCurrency(value.price)}
                  </div>
                  <div className="w-full h-[30px] flex flex-row rounded-[12px] justify-between items-center shadow-md">
                    <IconButton
                      onClick={() => {}}
                      className="w-[30px] h-[30px] rounded-[12px] bg-textPrimary flex justify-center items-center"
                    >
                      <Remove className="text-white bg-transparent" />
                    </IconButton>
                    <div className="self-center text-base text-textSecondary font-bold">
                      {"1"}
                    </div>
                    <IconButton
                      onClick={() => {}}
                      className="w-[30px] h-[30px] rounded-[12px] bg-gradient-to-r from-[#421C6D] to-[#077167] flex justify-center items-center"
                    >
                      <Add className="text-white bg-transparent" />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <Button
                className="text-base font-bold bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent normal-case"
                onClick={() => handlePath("/produtos/bebidas")}
              >
                + Adicionar mais bebidas
              </Button>
              <ButtonGradient
                title="Finalizar compra"
                onClick={() => handlePath("/pagamento")}
              />
            </div>
          </div>
        </div>
      </main>
      <Modal
        title="Você clicou para remover 
        o Whisky Escocês."
        titleConfirm="Confirmar"
        onConfirm={() => {}}
        isOpen={isOpenModal}
        onClose={closeModal}
      />
    </>
  );
};

export default PedidoPage;
