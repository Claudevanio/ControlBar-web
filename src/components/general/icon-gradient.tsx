import { IconGradientProps } from "@/types";

const IconGradient = ({ children }: IconGradientProps) => {
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id="gradientColors">
          <stop offset="0%" stopColor="#421C6D" />
          <stop offset="100%" stopColor="#077167" />
        </linearGradient>
      </svg>
      {children}
    </>
  );
};

export default IconGradient;
