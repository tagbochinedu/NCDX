import { useSelector } from "react-redux";
import { selectAllThemes, State } from "../Features/Themes/ThemesSlice";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const themeState: State[] = useSelector(selectAllThemes);

  const styles = {
    footer: {
      marginLeft: "16px",
      marginRight: "16px",
      paddingLeft: themeState[0].footerType === "fixed" ? "16px" : "0px",
      paddingRight: themeState[0].footerType === "fixed" ? "16px" : "0px",
      paddingTop: "20px",
      paddingBottom: "20px",
      position: themeState[0].footerType === "fixed" ? "sticky" : "relative",
      display: themeState[0].footerType === "hidden" ? "none" : "flex",
      justifyContent: "space-between",
      alignItems: "center",
      bottom: "0",
      left: "0",
      right: "0",
      zIndex: "10",
      backgroundColor: themeState[0].footerType === "fixed" ? "white" : "transparent",
      boxShadow:
        (themeState[0].skin === "default" &&
          themeState[0].footerType === "fixed") ||
        (themeState[0].skin === "semi dark" &&
          themeState[0].footerType === "fixed")
          ? "0 4px 10px 3px rgb(0 0 0 / 0.1)"
          : "",
      borderWidth: themeState[0].skin === "bordered" ? "1px" : "",
      transition: "all 300ms ease-in-out",
      borderTopRightRadius: "8px",
      borderTopLeftRadius: "8px",
    },
    
  };

  return (
    <Box component="footer" sx={styles.footer}>
      <p className="text-logo text-lg">Made and powered by Coffee</p>
    </Box>
  );
};

export default Footer;
