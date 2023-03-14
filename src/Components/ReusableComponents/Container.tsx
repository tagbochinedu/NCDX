import {Box} from "@mui/material";

import React, {ReactNode} from "react";

interface Props {
    styling: any, 
    children: ReactNode 
}

const BoxWrapper: React.FC<Props> = (props:Props) => {
  const BoxStyles = {
    boxShadow: "0px 2px 10px 0px rgba(76, 78, 100, 0.22)",
    borderRadius: '10px',
    backgroundColor: 'white',
  };


  return <Box component="div" sx={{ ...BoxStyles, ...props.styling }}>{props.children}</Box>;
};

export default BoxWrapper;
