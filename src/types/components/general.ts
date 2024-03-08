import { ButtonBaseProps } from "@mui/material";
import { ReactNode } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary";
} & ButtonBaseProps;

export type IconGradientProps= {
  children: ReactNode;
};

export type StepperProps = {
  currentStep: number;
  totalSteps: number;
};
