import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { ButtonBaseProps } from "@mui/material";

export type CardEventProps = {
  imgEvent: string | StaticImageData;
  dateEvent: string;
  nameEvent: string;
  location: string;
  onClick?: () => void;
};

export type CardOptionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export type CardProductProps = {
  imgProduct: string | StaticImageData;
  name: string;
  price: number;
  onClick?: () => void;
};

export type CardOrderProps = {
  nameEvent: string;
  dateEvent: string;
  dateOrder: string;
  quantityItems: number;
  valueOrder: number;
  numberOrder: number;
  onClick?: () => void;
};
