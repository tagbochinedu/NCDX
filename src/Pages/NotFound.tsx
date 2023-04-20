import React from "react";
import { Typography, Box } from "@mui/material";
import Clickable from "../Components/ReusableComponents/Clickable";
import { Link } from "react-router-dom";

const NotFound = () => {
  const styles = {
    box: {
      minHeight: "78vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    code: {
      color: "#626477",
      fontSize: "120px",
      fontWeight: "500",
    },
    title: {
      color: "#626477",
      fontSize: { xs: "20px", sm: "30px" },
      fontWeight: "500",
      textAlign: "center",
    },
    message: {
      fontSize: { xs: "12px", sm: "18px" },
      marginTop: 1,
      marginBottom: 2,
      color: "#B6B6C0",
      textAlign: "center",
    },
    button: {
      color: "white",
      marginLeft: { xs: "0px", sm: "12px" },
      width: { xs: "100%", sm: "auto" },
      fontSize: "18px",
      borderRadius: "8px",
      marginTop: "-2px",
    },
  };
  
    
  
  return (
    <Box component="section" sx={styles.box}>
      <Typography variant="h2" component="h2" sx={styles.code}>
        404
      </Typography>
      <Typography variant="h6" component="h6" sx={styles.title}>
        Page Not Found ⚠️
      </Typography>
      <Typography variant="subtitle1" component="p" sx={styles.message}>
        We couldn′t find the page you are looking for.
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

export default NotFound;
