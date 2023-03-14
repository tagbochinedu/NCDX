import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Props {
  option: string[];
  inputLabel: string;
}


export default function CountrySelect({ option, inputLabel }: Props) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{
        width: "31%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
        "& .MuiOutlinedInput-root:hover": {
          borderColor: "#626477",
        },
      }}
      options={option}
      autoHighlight={true}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ height: "50px", color: "#626477" }}
          {...props}
        >
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={inputLabel}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
