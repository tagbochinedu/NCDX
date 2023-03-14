import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IosShareIcon from "@mui/icons-material/IosShare";
import Clickable from "../Components/ReusableComponents/Clickable";
import BoxWrapper from "../Components/ReusableComponents/Container";
import Filter from "../Components/ReusableComponents/Filter";
import UserTable from "../Components/UserTable";

const Users: React.FC = () => {
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
    container: { m: "16px" },
    filter: {
      paddingTop: 2,
      paddingBottom: 2.5,
      paddingLeft: 2.5,
      paddingRight: 2.5,
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
    },
    export: {
      color: "#B6B6C0",
      fontWeight: 600,
      borderColor: "#B6B6C0",
      "&:hover": {
        borderColor: "#626477",
      },
      borderRadius: "8px",
    },
  };
  return (
    <Box sx={styles.container}>
      <BoxWrapper styling={styles.filter}>
        <Typography variant="h6" component="h6" sx={styles.heading}>
          Search Filters
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Filter option={roles} inputLabel="Select Role" />
          <Filter option={plans} inputLabel="Select Plan" />
          <Filter option={status} inputLabel="Select Status" />
        </Box>
      </BoxWrapper>
      <BoxWrapper styling={styles.table}>
        <Container>
          <Clickable
            variant="outlined"
            disableElevation={true}
            styling={styles.export}
            startIcon={<IosShareIcon />}
            size="large"
          >
            EXPORT
          </Clickable>
        </Container>
        <UserTable />
      </BoxWrapper>
    </Box>
  );
};

export default Users;
