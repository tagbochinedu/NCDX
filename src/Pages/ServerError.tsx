import React from "react";
import { Typography, Box } from "@mui/material";
import Clickable from "../Components/ReusableComponents/Clickable";
import { Link } from "react-router-dom";

const ServerError = () => {
  const styles = {
    box: {
      minHeight: "78vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    code: {
      color: "#626477",
      fontSize: "120px",
      fontWeight: "500",
    },
    title: {
      color: "#626477",
      fontSize: "25px",
      fontWeight: "500",
      textAlign: "center",
    },
    message: {
      color: "#B6B6C0",
      fontSize: "16px",
      fontWeight: "500",
      textAlign: "center",
    },
    button: {
      borderRadius: "8px",
      color: "white",
    },
  };
  return (
    <Box component="section" sx={styles.box}>
      <Typography variant="h2" component="h2" sx={styles.code}>
        500
      </Typography>
      <Typography variant="h6" component="h6" sx={styles.title}>
        Internal server error 👨🏻‍💻
      </Typography>
      <Typography variant="subtitle1" component="p" sx={styles.message}>
        Oops, something went wrong!
      </Typography>
      <Clickable
        variant="contained"
        styling={styles.button}
        disableElevation={false}
        size="medium"
      >
        <Link to="/">BACK TO HOME</Link>
      </Clickable>
    </Box>
  );
};

export default ServerError;
