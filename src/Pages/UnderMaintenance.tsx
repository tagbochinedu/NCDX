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
    },
    title: { color: "#626477", fontSize: "30px" },
    text: {
      fontSize: "18px",
      marginTop: 1,
      marginBottom: 2,
      color: "#B6B6C0",
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
    },
    button: {
      borderRadius: "8px",
      color: "white",
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
