import { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  OutlinedInput,
 
  InputLabel,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = [
  "English",
  "French",
  "Spanish",
  "Portuguese",
  "Italian",
  "German",
  "Arabic",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface Check {
  mystate: any;
}

const SecondFormPage = ({ mystate }: Check) => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof language>) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  if (
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    country.trim() !== "" &&
    language.length > 0
  ) {
    mystate(true);
  }

  const styles = {
    textfield: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        color: "#626477",
      },
    },
  };

  return (
    <Box component="div">
      <Typography
        variant="h6"
        component="h6"
        sx={{ color: "#626477", fontSize: "16px", fontWeight: "600" }}
      >
        Personal Info
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          color: "#B6B6C0",
          fontSize: "12px",
          fontWeight: "300",
          marginBottom: "24px",
        }}
      >
        Setup Information
      </Typography>

      <Box component="div" sx={{ display: { md: "flex" } }}>
        <FormControl
          sx={{
            width: { sm: "100%", md: "50%" },
            marginBottom: "24px",
            marginRight: { md: "12px" },
          }}
        >
          <TextField
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFirstName(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="First name"
            type="text"
            variant="outlined"
            placeholder="Chinedu Tagbo"
            sx={styles.textfield}
          />
        </FormControl>
        <FormControl
          sx={{
            width: { sm: "100%", md: "50%" },
            marginBottom: "24px",
            marginLeft: { md: "12px" },
          }}
        >
          <TextField
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="Last name"
            type="text"
            variant="outlined"
            placeholder="Tagbo"
            sx={styles.textfield}
          />
        </FormControl>
      </Box>
      <Box component="div" sx={{ display: { md: "flex" } }}>
        <FormControl
          sx={{
            width: { sm: "100%", md: "50%" },
            marginBottom: "24px",
            marginRight: { md: "12px" },
          }}
        >
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            sx={{
              borderRadius: "8px",
            }}
            onChange={(e: SelectChangeEvent<string>) => {
              setCountry(e.target.value);
            }}
          >
            <MenuItem value="" sx={{ color: "#626477" }}>
              Country
            </MenuItem>
            {["USA", "UK", "Australia", "Germany"].map((country, index) => (
              <MenuItem key={index} value={country} sx={{ color: "#626477" }}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: { sm: "100%", md: "50%" },
            marginBottom: "24px",
            marginLeft: { md: "12px" },
          }}
        >
          <InputLabel id="demo-multiple-name-label">Language</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={language}
            onChange={handleChange}
            input={<OutlinedInput label="Language" />}
            MenuProps={MenuProps}
            sx={{
              borderRadius: "8px",
            }}
          >
            {languages.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, language, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SecondFormPage;
