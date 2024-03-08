"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, IconButton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { Add, Home, Remove, ShoppingCartOutlined } from "@mui/icons-material";
import { IconGradient, ButtonGradient, SelectFieldInput } from "@/components";
import logoPic from "@/assets/logo-control-bar.png";
import productPic from "@/assets/product-img.png";
import { CurrencyUtils } from "@/utils";

type ProductCart = {
  imgProduct: string | StaticImageData;
  name: string;
  price: number;
  type: DrinkTypes;
};

type DrinkTypes = "beer" | "water" | "drinks" | "juice";

const productsData: ProductCart[] = [
  {
    imgProduct: productPic,
    name: "Whisky 1 Escocês Blended Finest...",
    price: 50.99,
    type: "beer",
  },
  {
    imgProduct: productPic,
    name: "Whisky 2 Escocês Blended Finest...",
    price: 32.99,
    type: "water",
  },
  {
    imgProduct: productPic,
    name: "Whisky 3 Escocês Blended Finest...",
    price: 83.99,
    type: "juice",
  },
  {
    imgProduct: productPic,
    name: "Whisky 4 Escocês Blended Finest...",
    price: 89.99,
    type: "drinks",
  },
  {
    imgProduct: productPic,
    name: "Whisky 5 Escocês Blended Finest...",
    price: 12.99,
    type: "drinks",
  },
];

type Options = "all" | "beer" | "juice" | "drinks" | "water";

const ProdutosPage = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [typeDrinks, setTypeDrinks] = useState<Options>("all");

  const handlePath = (path: string) => {
    router.push(path);
  };

  const productsDetails =
    typeDrinks !== "all"
      ? productsData.filter(
          (value) =>
            value.type === typeDrinks && value.name.includes(searchValue)
        )
      : productsData.filter((value) => value.name.includes(searchValue));

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="flex bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-8 p-[8%] h-full w-full items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <Image src={logoPic} alt="logo-img" width={60} height={50} />
            <div className="flex flex-row px-2 bg-primaryLight h-9 w-4/6 rounded-[15px] justify-between items-center align-middle">
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
                <div className="text-xl text-white font-bold">
                  {productsData.length}
                </div>
              </div>
              <div className="flex flex-row w-7/12 text-base text-white font-bold p-2">
                {CurrencyUtils.toCurrency(254)}
              </div>
            </div>
            <IconButton onClick={() => handlePath("/home")}>
              <IconGradient>
                <Home
                  sx={{ fill: "url(#gradientColors)", height: 24, width: 24 }}
                />
              </IconGradient>
            </IconButton>
          </div>
          <ScrollContainer className="w-full flex scroll-container justify-center items-center">
            <Button
              onClick={() => setTypeDrinks("all")}
              className="flex flex-col normal-case"
            >
              <div
                className={`font-base ${
                  typeDrinks === "all"
                    ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                    : "text-textQuaternary font-medium"
                }`}
              >
                Todos
              </div>
              {typeDrinks === "all" && (
                <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
              )}
            </Button>
            <Button
              onClick={() => setTypeDrinks("beer")}
              className="flex flex-col normal-case"
            >
              <div
                className={`font-base ${
                  typeDrinks === "beer"
                    ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                    : "text-textQuaternary font-medium"
                }`}
              >
                Cerveja
              </div>
              {typeDrinks === "beer" && (
                <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
              )}
            </Button>
            <div>
              <Button
                onClick={() => setTypeDrinks("juice")}
                className="flex flex-col normal-case"
              >
                <div
                  className={`font-base ${
                    typeDrinks === "juice"
                      ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                      : "text-textQuaternary font-medium"
                  }`}
                >
                  Sucos
                </div>
                {typeDrinks === "juice" && (
                  <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
                )}
              </Button>
            </div>
            <div>
              <Button
                onClick={() => setTypeDrinks("drinks")}
                className="flex flex-col normal-case"
              >
                <div
                  className={`font-base ${
                    typeDrinks === "drinks"
                      ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                      : "text-textQuaternary font-medium"
                  }`}
                >
                  Drinks
                </div>
                {typeDrinks === "drinks" && (
                  <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
                )}
              </Button>
            </div>
            <div>
              <Button
                onClick={() => setTypeDrinks("water")}
                className="flex flex-col normal-case"
              >
                <div
                  className={`font-base ${
                    typeDrinks === "water"
                      ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                      : "text-textQuaternary font-medium"
                  }`}
                >
                  Água
                </div>
                {typeDrinks === "water" && (
                  <div className="rounded-[10px] w-1/2 h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
                )}
              </Button>
            </div>
          </ScrollContainer>
          <SelectFieldInput value={searchValue} onChange={setSearchValue} />
          <div className="w-full gap-8 grid grid-cols-2 grid-rows-2">
            {productsDetails.map((value, index) => (
              <div
                key={index}
                className="flex flex-col rounded-[12px] border border-textPrimary items-center text-center"
              >
                <Button
                  className="flex flex-col py-4 gap-2 rounded-t-[12px] items-center text-center"
                  onClick={() => handlePath(`/produtos/bebidas/${value.name}`)}
                >
                  <Image
                    src={value.imgProduct}
                    alt="product-img"
                    width={75}
                    height={90}
                  />
                  <div className="w-4/6 text-[10px] font-normal text-textTertiary">
                    {value.name}
                  </div>
                  <div className="text-sm font-bold text-primaryLight">
                    {CurrencyUtils.toCurrency(value.price)}
                  </div>
                </Button>
                <div className="w-full h-[30px] flex flex-row rounded-[12px] justify-between items-center shadow-md">
                  <IconButton
                    onClick={() => {}}
                    className="w-[30px] h-[30px] rounded-[12px] bg-textPrimary flex justify-center items-center"
                  >
                    <Remove className="text-white" />
                  </IconButton>
                  <div className="self-center text-base text-textSecondary font-bold">
                    {"1"}
                  </div>
                  <IconButton
                    onClick={() => {}}
                    className="w-[30px] h-[30px] rounded-[12px] bg-gradient-to-r from-[#421C6D] to-[#077167] flex justify-center items-center"
                  >
                    <Add className="text-white" />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
          <ButtonGradient
            title="Finalizar compra"
            onClick={() => handlePath("/carrinho")}
          />
        </div>
      </div>
    </main>
  );
};

export default ProdutosPage;
