import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, TextField } from "@mui/material";
import Clickable from "../Components/ReusableComponents/Clickable";

const UnderMaintenance: React.FC = () => {
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
    title: { color: "#626477", fontSize: { xs: "20px", sm: "30px" } },
    text: {
      fontSize: { xs: "12px", sm: "18px" },
      marginTop: 1,
      marginBottom: 2,
      color: "#B6B6C0",
      textAlign: "center",
    },
    input: {
      "& .MuiOutlinedInput-root": {
        paddingLeft: "12px",
        paddingRight: "12px",

        borderRadius: "8px",
        fontSize: "18px",
        borderColor: "#EDEFF1",
        borderWidth: "",
        "&:hover": {
          borderColor: "white",
        },
        backgroundColor: "white",
      },
      width: { xs: "100%", sm: "auto" },
      marginBottom: { xs: "10px", sm: "0px" },
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
      <Typography variant="h4" component="h4" sx={styles.title}>
        Under Maintenance! 🚧
      </Typography>
      <Typography variant="subtitle1" component="p" sx={styles.text}>
        Sorry for the inconvenience but we′re performing some maintenance at the
        moment
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

export default UnderMaintenance;
