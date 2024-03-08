import { InputAdornment, TextField } from "@mui/material";
import { TextFieldInputProps } from "@/types";

const TextFieldInput = ({
  label,
  error,
  value,
  variant,
  className,
  placeholder,
  leftIconName,
  rightIconName,
  ...rest
}: TextFieldInputProps) => {
  return (
    <div className="mb-4">
      <TextField
        value={value}
        placeholder={placeholder}
        className="h=[54px] min-w-[300px] w-full"
        InputProps={{
          style: {
            fontSize: 14,
            fontWeight: "medium",
            borderRadius: 30,
            borderColor: "#ff0000",
            
          },
          // sx: {
          //   fontSize: 14,
          //   fontWeight: "medium",
          //   borderRadius: 30,
          //   borderColor: "#545C6F",
          // },
          startAdornment: (
            <InputAdornment position="start">
              {leftIconName && leftIconName}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {rightIconName && rightIconName}
            </InputAdornment>
          )
        }}
        // bgColor={variant === "primary" ? "#FFFFFF" : "#F2F2F2"}
        // className={`text-sm bg-transparent ${className}`}
        // width={"full"}
        // minWidth={300}
        // height={54}
        // borderRadius={30}
        // fontSize={"sm"}
        // fontWeight={"medium"}
        // placeholder={placeholder}
        // placeholderTextColor={"#39474F"}
        // color={"#39474F"}
        // borderColor={error ? "#D70000" : "#39474F"}
        // _focus={{
        //   bgColor: variant === "primary" ? "#FFFFFF" : "#F2F2F2",
        //   borderColor: error ? "#D70000" : "#39474F",
        // }}
        // InputLeftElement={
        //   leftIconName ? (
        //     <div className="pl-1">
        //       <IconGradient iconName={leftIconName} />
        //     </div>
        //   ) : undefined
        // }
        // InputRightElement={
        //   rightIconName ? (
        //     <div className="pl-1">
        //       <IconGradient iconName={rightIconName} />
        //     </div>
        //   ) : undefined
        // }
        {...rest}
      />
      {error && (
        <div className="text-danger text-sm font-medium self-start px-5">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextFieldInput;
