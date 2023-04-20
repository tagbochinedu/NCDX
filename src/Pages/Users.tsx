import React, { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IosShareIcon from "@mui/icons-material/IosShare";
import Clickable from "../Components/ReusableComponents/Clickable";
import BoxWrapper from "../Components/ReusableComponents/Container";
import Filter from "../Components/ReusableComponents/Filter";
import UserTable from "../Components/UserTable";
import UserForm from "../Components/UserForm";
import { useSelector } from "react-redux";
import { filterUserData } from "../Features/Users/UsersSlice";
import { UserInterface } from "../Data/Data";
import TextField from "@mui/material/TextField";

const Users: React.FC = () => {
  const [filter, setFilter] = useState({
    role: "",
    stat: "",
    plan: "",
    query: "",
  });

  const rows: UserInterface[] = useSelector((state: any) =>
    filterUserData(state, filter)
  );

  const roles: string[] = [
    "Admin",
    "Author",
    "Editor",
    "Maintainer",
    "Subscriber",
  ];
  const plans: string[] = ["Basic", "Company", "Enterprise", "Team"];
  const status: string[] = ["Pending", "Active", "Inactive"];

  const styles = {
    container: { m: "16px", display: { lg: "flex" }, flexDirection: "column" },
    filter: {
      paddingTop: 2,
      paddingBottom: 2.5,
      paddingLeft: 2.5,
      paddingRight: 2.5,
      flexShrink: 1,
    },
    heading: {
      color: "#626477",
      paddingTop: 1,
      paddingBottom: 2,
      fontWeight: 600,
    },
    table: {
      marginTop: 3.5,
      paddingTop: 2.5,
      paddingBottom: 2.5,
      flexShrink: 1,
    },
    export: {
      color: "#B6B6C0",
      fontWeight: 600,
      borderColor: "#B6B6C0",
      "&:hover": {
        borderColor: "#626477",
      },
      borderRadius: "8px",
      marginBottom: { xs: "15px", md: "0px" },
    },
    adduser: {
      color: "white",
      fontWeight: 600,
      borderColor: "#B6B6C0",
      borderRadius: "8px",
      width: { xs: "100%", md: "auto" },
    },
  };
  return (
    <Box sx={styles.container}>
      <BoxWrapper styling={styles.filter}>
        <Typography variant="h6" component="h6" sx={styles.heading}>
          Search Filters
        </Typography>{" "}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Filter
            option={roles}
            value={filter.role}
            inputLabel="Select Role"
            changeHandler={(val: string) => {
              setFilter((prev) => ({ ...prev, role: val }));
            }}
          />
          <Filter
            option={plans}
            value={filter.plan}
            inputLabel="Select Plan"
            changeHandler={(val: string) => {
              setFilter((prev) => ({ ...prev, plan: val }));
            }}
          />
          <Filter
            option={status}
            value={filter.stat}
            inputLabel="Select Status"
            changeHandler={(val: string) => {
              setFilter((prev) => ({ ...prev, stat: val }));
            }}
          />
        </Box>
      </BoxWrapper>
      <BoxWrapper styling={styles.table}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            marginBottom: 2.5,
            marginLeft: 2.5,
            marginRight: 2.5,
          }}
        >
          <Clickable
            variant="outlined"
            disableElevation={true}
            styling={styles.export}
            startIcon={<IosShareIcon />}
            size="large"
          >
            EXPORT
          </Clickable>
          <Box
            sx={{ display: { xs: "block", md: "flex" }, alignItems: "center" }}
          >
            <Box
              component="form"
              sx={{
                marginRight: "25px",
                marginTop: { xs: "10px", md: "0px" },
                marginBottom: { xs: "10px", md: "0px" },
                width: { xs: "100%", md: "auto" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                inputProps={{
                  style: {
                    padding: 9,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    color: "#626477",
                  },
                  width: { xs: "100%", md: "275px" },
                }}
                type="text"
                placeholder="Search User"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFilter((prev) => ({ ...prev, query: e.target.value }));
                }}
              />
            </Box>
            <UserForm
              variant="contained"
              disableElevation={false}
              styling={styles.adduser}
              startIcon={<></>}
              size="large"
            >
              ADD USER
            </UserForm>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{ width: "100%", display: "flex", overflow: "scroll" }}
        >
          <UserTable rows={rows} />
        </Box>
      </BoxWrapper>
    </Box>
  );
};

export default Users;
