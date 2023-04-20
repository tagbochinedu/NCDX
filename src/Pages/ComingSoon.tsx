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
