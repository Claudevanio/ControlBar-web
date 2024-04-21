import { StaticImageData } from "next/image";

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
};
