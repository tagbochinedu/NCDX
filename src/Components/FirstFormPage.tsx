import { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
interface Check {
  mystate: any;
}

const FirstFormPage = ({ mystate }: Check) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  if (
    email.trim() !== "" &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) &&
    password.trim().length > 0 &&
    confirmPassword.trim() === password &&
    username.trim() !== ""
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
    <Box>
      <Typography
        variant="h6"
        component="h6"
        sx={{ color: "#626477", fontSize: "16px", fontWeight: "600" }}
      >
        Account Details
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
        Enter your Account Details
      </Typography>
      <Box component="div" sx={{ display: { md: "flex" } }}>
        <FormControl
          sx={{
            width: { xs: "100%", md: "50%" },
            marginBottom: "24px",
            marginRight: { md: "12px" },
          }}
        >
          <TextField
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="Username"
            type="text"
            variant="outlined"
            placeholder="Chinedu Tagbo"
            sx={{ ...styles.textfield, marginTop: "0px" }}
          />
        </FormControl>
        <FormControl
          sx={{
            width: { xs: "100%", md: "50%" },
            marginBottom: "24px",
            marginLeft: { md: "12px" },
          }}
        >
          <TextField
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="Email"
            type="email"
            variant="outlined"
            placeholder="Chinedu@Tagbo.com"
            sx={{ ...styles.textfield, marginTop: "0px" }}
          />
        </FormControl>
      </Box>{" "}
      <Box component="div" sx={{ display: { md: "flex" } }}>
        <FormControl
          sx={{
            width: { xs: "100%", md: "50%" },
            marginBottom: "24px",
            marginRight: { md: "12px" },
            ...styles.textfield,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl
          sx={{
            width: { xs: "100%", md: "50%" },
            marginBottom: "24px",
            marginLeft: { md: "12px" },
            ...styles.textfield,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword(e.target.value);
            }}
            id="outlined-adornment-password"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default FirstFormPage;
