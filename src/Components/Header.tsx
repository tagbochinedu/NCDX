import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { selectAllThemes, State } from "../Features/Themes/ThemesSlice";

interface Props {
  openMenu: () => void;
}

const Header = ({ openMenu }: Props) => {
  const [scrolled, setScrolled] = useState(0);
  const [transition, setTransition] = useState(false);
  const themeState: State[] = useSelector(selectAllThemes);

  const handleScroll = () => {
    setScrolled(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrolled >= 10) {
      setTransition(true);
    } else {
      setTransition(false);
    }
  }, [scrolled]);

  const styles = {
    header: {
      marginLeft: "17px",
      marginRight: "17px",
      paddingLeft: transition ? "16px" : "",
      paddingRight: transition ? "16px" : "",
      paddingTop: "20px",
      paddingBottom: "20px",
      position: themeState[0].appBar === "fixed" ? "sticky" : "relative",
      display: themeState[0].appBar === "hidden" ? "none" : "flex",
      justifyContent: "space-between",
      alignItems: "center",
      top: themeState[0].appBar === "fixed" ? "0" : "",
      zIndex: "10",
      backgroundColor: transition ? "white" : "inherit",
      boxShadow:
        transition &&
        (themeState[0].skin === "default" || themeState[0].skin === "semi dark")
          ? "0 4px 10px 3px rgb(0 0 0 / 0.1)"
          : "",
      borderWidth: transition && themeState[0].skin === "bordered" ? "1px" : "",
      transition: "all 300ms ease-in-out",
      borderBottomRightRadius: "8px",
      borderBottomLeftRadius: "8px",
    },
    text: {
      marginLeft: "12px",
      color: { xs: "transparent", md: "#B6B6C0" },
    },
    avatar: {
      backgroundColor: "#EDEFF1",
      width: "36px",
      height: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      position: "relative",
    },
    avatarText: {
      fontSize: "18px",
      color: "#626477",
    },
    avatarStatus: {
      width: "12px",
      height: "12px",
      borderWidth: "2px",
      borderColor: "white",
      borderRadius: "50%",
      bottom: "0",
      right: "0",
      backgroundColor: "#72E028",
      position: "absolute",
    },
  };

  return (
    <Box component="header" sx={styles.header}>
      <Box component="div" sx={{ display: "flex" }}>
        <MenuIcon
          onClick={openMenu}
          sx={{
            display: { xs: "block", md: "none" },
            marginRight: "10px",
            fill: "#626477",
          }}
        />
        <svg
          className="w-6 h-6 fill-logo"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MagnifyIcon"
        >
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
        </svg>
        <Typography variant="subtitle1" component="p" sx={styles.text}>
          Search (Ctrl+/)
        </Typography>
      </Box>
      <Box component="div" sx={styles.avatar}>
        {" "}
        <Typography variant="subtitle1" component="p" sx={styles.avatarText}>
          U
        </Typography>
        <Box component="div" sx={styles.avatarStatus} />
      </Box>
    </Box>
  );
};

export default Header;
