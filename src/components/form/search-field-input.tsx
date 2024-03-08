import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { SearchFieldInputProps } from "@/types";
import { IconGradient } from "..";

const SearchFieldInput = ({ value, onChange, ...rest }: SearchFieldInputProps) => {
  return (
    <TextField
      className={`rounded-[20px] text-sm bg-background w-full h-[40px] min-w-[300px]`}
      placeholder={"Buscar"}
      value={value ?? ""}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
      InputProps={{
        style: {
          fontSize: 14,
          fontWeight: "medium",
          borderRadius: 30,
        },
        startAdornment: (
          <InputAdornment position="start">
            <IconGradient>
              <Search sx={{ fill: "url(#gradientColors)" }} />
            </IconGradient>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default SearchFieldInput;
