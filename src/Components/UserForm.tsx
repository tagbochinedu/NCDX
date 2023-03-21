import React, { useState, ReactNode, ChangeEvent } from "react";
import {
  Box,
  Drawer,
  Button,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Clickable from "./ReusableComponents/Clickable";
import { addUser } from "../Features/Users/UsersSlice";
import { useDispatch } from "react-redux";

interface Props {
  variant: "contained" | "outlined" | "text";
  styling: any;
  startIcon?: ReactNode;
  disableElevation: boolean;
  size: "small" | "medium" | "large";
  children: ReactNode;
}

interface UserObject {
  lastName: string;
  company: string;
  ROLE: string;
  firstName: string;
  country: string;
  contact: string;
  EMAIL: string;
  PLAN: string;
}

const TemporaryDrawer = ({
  children,
  variant,
  styling,
  startIcon,
  disableElevation,
  size,
}: Props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [role, setRole] = useState("");
  const [plan, setPlan] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };
  const handlePlanChange = (event: SelectChangeEvent) => {
    setPlan(event.target.value);
  };
  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  const emailHandler = () => {
    if (
      email.trim() !== "" &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false
    ) {
      return setError(true);
    }
  };

  const submitHandler = () => {
    let userData: UserObject = {
      lastName: lastName,
      firstName: firstName,
      company: company,
      ROLE: role,
      country: country,
      contact: phoneNumber,
      EMAIL: email,
      PLAN: plan,
   
    };
    dispatch(addUser(userData));
    setState(false);
    console.log(userData);
  };

  const styles = {
    select: {
      "& .MuiMenuItem-root": {
        color: "#626477",
      },
    },
    textfield: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        color: "#626477",
      },
    },
  };
  return (
    <div>
      {" "}
      <Button
        onClick={toggleDrawer(true)}
        variant={variant}
        sx={{ ...styling }}
        startIcon={startIcon}
        disableElevation={disableElevation}
        size={size}
      >
        {children}
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 400 }} role="presentation">
          <Box
            component="div"
            sx={{ backgroundColor: "#EDEFF1", p: 1.5, color: "#626477" }}
          >
            <Typography variant="h6" component="h6">
              Add User
            </Typography>
          </Box>
          <Box component="div" sx={{ p: 2.5 }}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFirstName(e.target.value);
                }}
                required
                id="outlined-basic"
                margin="normal"
                label="Full Name"
                type="text"
                variant="outlined"
                placeholder="Chinedu Tagbo"
                sx={styles.textfield}
              />
            </FormControl>

            <FormControl sx={{ width: "100%" }}>
              <TextField
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setLastName(e.target.value);
                }}
                required
                id="outlined-basic"
                margin="normal"
                label="UserName"
                type="text"
                placeholder="tagbochinedu"
                variant="outlined"
                sx={styles.textfield}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                }}
                onBlur={emailHandler}
                onFocus={() => {
                  setError(false);
                }}
                error={error}
                id="outlined-basic"
                margin="normal"
                label="Email"
                type="email"
                helperText={error ? "Please enter a valid email" : ""}
                placeholder="johntagbo2@gmail.com"
                variant="outlined"
                sx={styles.textfield}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCompany(e.target.value);
                }}
                required
                id="outlined-basic"
                margin="normal"
                label="Company"
                placeholder="Godseed Holdings"
                type="text"
                variant="outlined"
                sx={styles.textfield}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCountry(e.target.value);
                }}
                required
                id="outlined-basic"
                margin="normal"
                label="Country"
                placeholder="Nigeria"
                type="text"
                variant="outlined"
                sx={styles.textfield}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPhoneNumber(e.target.value);
                }}
                required
                id="outlined-basic"
                margin="normal"
                label="Phone Number"
                placeholder="+2348020769335"
                type="tel"
                variant="outlined"
                sx={styles.textfield}
              />{" "}
            </FormControl>
            <FormControl sx={{ marginTop: 2, width: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">
                Select Role
              </InputLabel>
              <Select
                required
                sx={{ borderRadius: "8px", color: "#626477" }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={role}
                label="Select Role"
                onChange={handleRoleChange}
              >
                <MenuItem value="Admin" sx={styles.select}>
                  Admin
                </MenuItem>
                <MenuItem value="Author" sx={styles.select}>
                  Author
                </MenuItem>
                <MenuItem value="Editor" sx={styles.select}>
                  Editor
                </MenuItem>
                <MenuItem value="Maintainer" sx={styles.select}>
                  Maintainer
                </MenuItem>
                <MenuItem value="Subscriber" sx={styles.select}>
                  Subscriber
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ marginTop: 3, width: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">
                Select Plan
              </InputLabel>
              <Select
                required
                sx={{ borderRadius: "8px", color: "#626477" }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={plan}
                label="Select Plan"
                onChange={handlePlanChange}
              >
                <MenuItem value="Basic" sx={styles.select}>
                  Basic
                </MenuItem>
                <MenuItem value="Company" sx={styles.select}>
                  Company
                </MenuItem>
                <MenuItem value="Enterprise" sx={styles.select}>
                  Enterprise
                </MenuItem>
                <MenuItem value="Team" sx={styles.select}>
                  Team
                </MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ paddingTop: 2 }}>
              <Clickable
                onClick={submitHandler}
                variant="contained"
                styling={{
                  color: "white",
                  fontWeight: 700,
                  marginRight: 1,
                  paddingLeft: 3,
                  paddingRight: 3,
                  borderRadius: "8px",
                }}
                disableElevation={false}
                size="large"
              >
                Submit
              </Clickable>
              <Clickable
                variant="outlined"
                styling={{
                  fontWeight: 700,
                  marginLeft: 1,
                  paddingLeft: 3,
                  paddingRight: 3,
                  borderRadius: "8px",
                }}
                disableElevation={true}
                size="large"
                onClick={toggleDrawer(false)}
              >
                Cancel
              </Clickable>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default React.memo(TemporaryDrawer);
