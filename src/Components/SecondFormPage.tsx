import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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

const SecondFormPage = ({mystate}: Check) => {
  const theme = useTheme();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [language, setLanguage] = React.useState<string[]>([]);

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

  return (
    <div className="">
      <h6 className="text-logo text-sm font-semibold">Personal Info</h6>
      <p className="text-lgr text-xs font-light mb-6">Setup Information</p>
      <div className="md:flex">
        <div className="relative z-0 mb-6 group md:mr-3 md:w-6/12">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setFirstName(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-blur:z-10 peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0 mb-6 group md:ml-3 md:w-6/12">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-3 rounded-md px-0 w-full text-sm text-logo bg-transparent border-[1px] border-lgr appearance-none dark:text-logo dark:border-lgr dark:focus:border-green focus:outline-none focus:ring-0 focus:border-green peer"
            placeholder=" "
            required
            onChange={(e: any) => {
              setLastName(e.target.value);
            }}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium bg-white px-2 -z-10 absolute text-sm text-lgr dark:text-logo duration-300 transform -translate-y-[22px] scale-75 top-3 left-2 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px] peer-focus:left-2"
          >
            Last Name
          </label>
        </div>
      </div>
      <div className="md:flex mb-6">
        <select
          className="bg-white border-[1px] border-lgr focus:outlimd:ne-0 w-full md:w-6/12 rounded-md md:mr-3 p-3 mb-6 md:mb-0"
          onChange={(e: any) => {
            setCountry(e.target.value);
          }}
        >
          <option>Country</option>
          <option className="py-10">UK</option>
          <option>USA</option>
          <option>Australia</option>
          <option>Germany</option>
        </select>
        <div className="md:w-6/12 md:ml-3">
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={language}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
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
        </div>
      </div>
    </div>
  );
};

export default SecondFormPage;
