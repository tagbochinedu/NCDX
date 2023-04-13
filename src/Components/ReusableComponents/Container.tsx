import { useState } from "react";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectAllThemes, State } from "../../Features/Themes/ThemesSlice";

interface Props {
  styling: any;
  children: ReactNode;
}

const BoxWrapper: React.FC<Props> = (props: Props) => {
  const themeState: State[] = useSelector(selectAllThemes);
  const BoxStyles = {
    boxShadow:
      themeState[0].skin === "default" || themeState[0].skin === "semi dark"
        ? "0px 2px 10px 0px rgba(76, 78, 100, 0.22)"
        : "",
    borderRadius: "10px",
    backgroundColor: "white",
    borderWidth: themeState[0].skin === "bordered" ? "1px" : "",
  };

  return (
    <Box component="div" sx={{ ...BoxStyles, ...props.styling }}>
      {props.children}
    </Box>
  );
};

export default BoxWrapper;
