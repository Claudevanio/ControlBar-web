import { StaticImageData } from "next/image";
import { SellingType } from "./selling-type";

export type EventProps = {
  dataEvento: string;
  idEvento: number;
  idPontoDeVenda: number;
  imagemEvento: string | StaticImageData;
  nomeEvento: string;
  enderecoEvento: string;
  bairroEvento: string;
  cidadeEvento: string;
  UfEvento: string;
  tipoVenda: SellingType;
  taxaCartao: number;
};
