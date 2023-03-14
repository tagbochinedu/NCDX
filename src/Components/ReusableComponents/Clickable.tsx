import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface Props {
  variant: "contained" | "outlined" | "text";
  styling: any;
  startIcon: ReactNode;
  disableElevation: boolean;
  size: "small" | "medium" | "large";
  children: ReactNode
}

const Clickable = ({
  variant,
  styling,
  startIcon,
  disableElevation,
  size, children
}: Props) => {
  return (
    <Button
      variant={variant}
      sx={{ ...styling }}
      startIcon={startIcon}
      disableElevation={disableElevation}
      size={size}
    >{children}</Button>
  );
};

export default Clickable;
