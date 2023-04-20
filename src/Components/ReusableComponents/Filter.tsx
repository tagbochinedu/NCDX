import * as React from "react";
import { MenuItem, InputLabel, Box, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  option: string[];
  inputLabel: string;
  value: string;
  changeHandler: any;
}

export default function BasicSelect({
  option,
  inputLabel,
  value,
  changeHandler,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    changeHandler(event.target.value as string);
    console.log(event.target.value);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "31%" },
        marginBottom: {xs: '20px', md: '0px'}
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={inputLabel}
          onChange={handleChange}
          sx={{
            borderRadius: "8px",
          }}
        >
          <MenuItem value="" sx={{ color: "#626477" }}>
            {inputLabel}
          </MenuItem>
          {option.map((item) => (
            <MenuItem key={item} value={item} sx={{ color: "#626477" }}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
