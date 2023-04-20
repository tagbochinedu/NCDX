import React, { ChangeEvent } from "react";
import { Box, Typography, FormControl, TextField } from "@mui/material";

interface Check {
  mystate: any;
}
const ThirdFormPage = ({ mystate }: Check) => {
  const [twitter, setTwitter] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [google, setGoogle] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");

  if (
    twitter.trim() !== "" &&
    facebook.trim() !== "" &&
    google.trim() !== "" &&
    linkedin.trim() !== ""
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
        Social Links
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
        Add Social Links
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
              setTwitter(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="Twitter"
            type="url"
            variant="outlined"
            placeholder="twitter.com"
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
              setFacebook(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="Twitter"
            type="url"
            variant="outlined"
            placeholder="twitter.com"
            sx={{ ...styles.textfield, marginTop: "0px" }}
          />
        </FormControl>
      </Box>
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
              setGoogle(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="Google+"
            type="url"
            variant="outlined"
            placeholder="google"
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
              setLinkedin(e.target.value);
            }}
            required
            id="outlined-basic"
            margin="normal"
            label="LinkedIn"
            type="url"
            variant="outlined"
            placeholder="linkedin.com"
            sx={{ ...styles.textfield, marginTop: "0px" }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default ThirdFormPage;
