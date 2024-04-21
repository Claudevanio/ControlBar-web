import { StaticImageData } from "next/image";

export type ProductProps = {
  idProduto: number;
  imagemProduto: string;
  nomeProduto: string;
  valorProduto: number;
};

export type ProductGroupProps = {
  idGrupoProduto: number;
  imagemGrupoProduto: string;
  nomeGrupoProduto: string;
};
