import { Radio as RadioBase } from "@mui/material";

const Radio = () => {
  return (
    <RadioBase
      className="border border-textPrimary"
      sx={{
        "&, &.Mui-checked": {
          color: "#5A2491",
        },
      }}
    />
  );
};

export default Radio;
