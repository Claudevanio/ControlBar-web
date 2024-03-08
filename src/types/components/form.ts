import { TextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export type TextFieldInputProps = {
  label?: string;
  error?: string;
  variant?: "primary" | "secondary";
  leftIconName?: ReactNode;
  rightIconName?: ReactNode;
} & TextFieldProps;

export type SearchFieldInputProps = {
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
};
