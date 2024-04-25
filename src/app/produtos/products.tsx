"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { Add, Home, Remove, ShoppingCartOutlined } from "@mui/icons-material";
import {
  IconGradient,
  ButtonGradient,
  SelectFieldInput,
  CardProductLoading,
} from "@/components";
import logoPic from "@/assets/logo-control-bar.png";
import noImage from "@/assets/no-image.png";
import { CurrencyUtils } from "@/utils";
import { api } from "@/services/api";
import { ProductGroupProps, ProductProps } from "@/types";

const ProdutosPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [typeDrinks, setTypeDrinks] = useState("");
  const [products, setProducts] = useState<ProductProps[]>();
  const [productGroups, setProductGroups] = useState<ProductGroupProps[]>();

  const handlePath = (path: string) => {
    router.push(path);
  };

  async function fetchData(id: number) {
    try {
      const response = await api.get(`/produtosdogrupo/${id}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const productGroups = sessionStorage.getItem("productGroups");

    if (productGroups) {
      setProductGroups(JSON.parse(productGroups));
    }
  }, []);

  useEffect(() => {
    if (params) {
      const [name, groupdId] = [params.get("name"), params.get("groupdId")];
      fetchData(Number(groupdId));

      if (name) setTypeDrinks(name);
    }
  }, [params]);

  const handleChangeGroup = (newName: string, id: number) => {
    router.push(`produtos?name=${newName}&groupdId=${id}`);
  };

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
                  {products?.length}
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
            {productGroups?.map((group) => (
              <Button
                key={group.idGrupoProduto}
                onClick={() => {
                  setTypeDrinks(group.nomeGrupoProduto.toLocaleLowerCase());
                  handleChangeGroup(
                    group.nomeGrupoProduto.toLocaleLowerCase(),
                    group.idGrupoProduto
                  );
                }}
                className="flex flex-col normal-case"
              >
                <div
                  className={`font-base ${
                    typeDrinks === group.nomeGrupoProduto.toLocaleLowerCase()
                      ? "bg-gradient-to-r from-[#421C6D] to-[#077167] bg-clip-text text-transparent font-bold"
                      : "text-textQuaternary font-medium"
                  }`}
                >
                  {group.nomeGrupoProduto}
                </div>
                {typeDrinks === group.nomeGrupoProduto.toLocaleLowerCase() && (
                  <div className="rounded-[10px] w-[65%] h-1 bg-gradient-to-r from-[#421C6D] to-[#077167]" />
                )}
              </Button>
            ))}
          </ScrollContainer>

          <SelectFieldInput value={searchValue} onChange={setSearchValue} />

          <div className="w-full gap-8 grid grid-cols-2 auto-rows-[20rem]">
            {!products ? (
              Array.from({ length: 2 }).map((_, index) => (
                <CardProductLoading key={index} />
              ))
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-xl font-bold">
                  Nenhum produto encontrado
                </div>
              </div>
            ) : (
              products?.map((product) => (
                <ProductCard
                  key={product.idProduto}
                  product={product}
                  handlePath={handlePath}
                />
              ))
            )}
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

function ProductCard({
  product,
  handlePath,
}: {
  product: ProductProps;
  handlePath: (path: string) => void;
}) {
  return (
    <div
      key={product.idProduto}
      className="flex flex-col rounded-[12px] h-full border border-textPrimary items-center text-center"
    >
      <Button
        className="flex flex-col py-4 w-full h-full gap-2 rounded-t-[12px] items-center text-center"
        onClick={() => handlePath(`/produtos/${product.nomeProduto}`)}
      >
        <Image
          src={product.imagemProduto ?? noImage}
          alt={`Imagem do produto ${product.nomeProduto}`}
          width={96}
          height={200}
          className="w-full h-[200px] object-contain"
        />
        <div className="w-4/6 text-[10px] font-normal text-textTertiary">
          {product.nomeProduto}
        </div>
        <div className="text-sm font-bold text-primaryLight">
          {CurrencyUtils.toCurrency(product.valorProduto)}
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
  );
}

export default ProdutosPage;
