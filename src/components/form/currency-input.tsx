import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NumericFormat } from "react-number-format";

const StyledTextField = styled(TextField)({
  "div.Mui-focused:after": {
    borderBottomColor: "rgba(66,28,109,1)",
  },
});

export default function CurrencyInput({ setValue }: any) {
  return (
    <NumericFormat
      customInput={StyledTextField}
      thousandSeparator=","
      placeholder="0,00"
      onValueChange={(values) => setValue(values.value)}
      hiddenLabel
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <span className="text-textQuaternary mt-0.5 opacity-80 text-xl">
              R$
            </span>
          </InputAdornment>
        ),
        className: "input-custom-gradient text-xl font-bold h-max",
      }}
      variant="filled"
    />
  );
}
