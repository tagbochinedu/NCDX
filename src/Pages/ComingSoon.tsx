import { useState, ChangeEvent } from "react";
import { Box, Typography, TextField } from "@mui/material";
import Clickable from "../Components/ReusableComponents/Clickable";

const ComingSoon = () => {
  const [email, setEmail] = useState<string>("");
  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>): any => {
    return setEmail(event.target.value);
  };
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
      color: "white",
      marginLeft: "12px",
      fontSize: "18px",
      borderRadius: '8px',
      marginTop: '-2px'
    },
  };
  return (
    <Box component="section" sx={styles.box}>
      {" "}
      <Typography variant="h4" component="h4" sx={styles.title}>
        We are launching soon 🚀
      </Typography>
      <Typography variant="subtitle1" component="p" sx={styles.text}>
        Our website is opening soon. Please register to get notified when it′s
        ready!
      </Typography>
      <form onSubmit={submitHandler}>
        <TextField
          inputProps={{
            style: {
              padding: 9,
            },
          }}
          sx={styles.input}
          type="email"
          placeholder="Enter email here"
          onChange={emailChangeHandler}
        />
        <Clickable
          variant="contained"
          styling={styles.button}
          disableElevation={false}
          size="medium"
          
        >
          NOTIFY
        </Clickable>

      
      </form>
    </Box>
  );
};

export default ComingSoon;
