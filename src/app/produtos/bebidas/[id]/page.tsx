"use client";
import { useRouter } from "next/navigation";
import { Button, IconButton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Add, Remove, ArrowBack } from "@mui/icons-material";
import { IconGradient, ButtonGradient } from "@/components";
import productPic from "@/assets/product-img.png";
import { CurrencyUtils } from "@/utils";

type ProductDetails = {
  imgProduct: string | StaticImageData;
  name: string;
  price: number;
  mark: string;
  description: string;
};

const productsDetails: ProductDetails = {
  imgProduct: productPic,
  name: "Bebida - Whisky Escocês",
  price: 89.99,
  mark: "Ballantines",
  description:
    "Whisky Escocês Blended Finest By Shawna X Ballantine's Garrafa 750 ml",
};

const ProdutosDetalhesPage = () => {
  const router = useRouter();

  const handlePath = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex bg-[#F2F2F2] h-full items-center justify-center">
      <div className="bg-white w-[450px] min-h-screen">
        <div className="flex flex-col gap-y-8 p-[10%] h-full items-center">
          <div className="w-full flex flex-row gap-2 justify-start items-center align-middle">
            <IconButton onClick={() => handlePath("/produtos/bebidas")}>
              <IconGradient>
                <ArrowBack sx={{ fill: "url(#gradientColors)" }} />
              </IconGradient>
            </IconButton>
            <div className="text-base text-primaryLight font-bold">
              {productsDetails.name}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center items-center">
            <Image
              src={productsDetails.imgProduct}
              alt="product-img"
              width={180}
              height={200}
            />
            <div className="text-base font-bold w-4/6 text-textTertiary">
              {productsDetails.description}
            </div>
            <div className="text-sm font-normal text-textTertiary">
              Marca: {productsDetails.mark}
            </div>
            <div className="mt-4 text-2xl font-bold text-primaryLight">
              {CurrencyUtils.toCurrency(productsDetails.price)}
            </div>
          </div>
          <div className="w-4/6 h-10 flex flex-row rounded-[12px] justify-between items-center shadow-md">
            <IconButton
              onClick={() => {}}
              className="w-10 h-10 rounded-[12px] bg-textPrimary flex justify-center items-center"
            >
              <Remove className="text-white bg-transparent" />
            </IconButton>
            <div className="self-center text-2xl text-textSecondary font-bold">
              {"1"}
            </div>
            <IconButton
              onClick={() => {}}
              className="w-10 h-10 rounded-[12px] bg-gradient-to-r from-[#421C6D] to-[#077167] flex justify-center items-center"
            >
              <Add className="text-white bg-transparent" />
            </IconButton>
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
              onClick={() => handlePath("/carrinho")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProdutosDetalhesPage;
