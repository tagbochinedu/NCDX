import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface Props {
  variant: "contained" | "outlined" | "text";
  styling: any;
  startIcon?: ReactNode;
  disableElevation: boolean;
  size: "small" | "medium" | "large";
  children: ReactNode
  onClick?: any
}

const Clickable = ({
  variant,
  styling,
  startIcon,
  disableElevation,
  size, children, onClick
}: Props) => {
  return (
    <Button
      variant={variant}
      sx={{ ...styling }}
      startIcon={startIcon}
      disableElevation={disableElevation}
      size={size}
      onClick={onClick}
    >{children}</Button>
  );
};

export default Clickable;
