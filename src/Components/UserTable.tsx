import { DataGrid, GridColDef } from "@mui/x-data-grid";

import ActionButton from "./ActionButton";
import { UserInterface } from "../Data/Data";
import { Typography, Box } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

interface CellType {
  row: UserInterface;
}
interface Props {
  rows: UserInterface[];
}

const columns: GridColDef[] = [
  {
    field: "fullName",
    headerName: "USER",
    flex: 0.2,
    minWidth: 150,
    headerClassName: "super-app-theme--header",

    renderCell: ({ row }: CellType) => {
      return (
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ color: "#626477", fontWeight: 600 }}
          >
            {row.fullName}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{
              color: "#B6B6C0",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            @{row.username}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "email",
    headerName: "EMAIL",
    flex: 0.2,
    minWidth: 150,
    headerClassName: "super-app-theme--header",

    renderCell: ({ row }: CellType) => {
      return (
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ color: "#626477", fontWeight: 500 }}
          >
            {row.email}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "role",
    headerName: "ROLE",
    flex: 0.2,
    minWidth: 150,
    headerClassName: "super-app-theme--header",

    renderCell: ({ row }: CellType) => {
      let icon = <></>;
      const role = row.role;
      const styles = { icons: { marginRight: 1 } };

      switch (role) {
        case "admin":
          icon = <LaptopOutlinedIcon sx={{ ...styles.icons, color: "red" }} />;
          break;
        case "editor":
          icon = (
            <ModeEditOutlineOutlinedIcon
              sx={{ ...styles.icons, color: "#47C6F9" }}
            />
          );
          break;
        case "author":
          icon = (
            <SettingsOutlinedIcon sx={{ ...styles.icons, color: "#F8C04B" }} />
          );
          break;
        case "maintainer":
          icon = (
            <DataSaverOffOutlinedIcon
              sx={{ ...styles.icons, color: "#72E028" }}
            />
          );
          break;
        case "subscriber":
          icon = (
            <PersonOutlineOutlinedIcon
              sx={{ ...styles.icons, color: "#72E028" }}
            />
          );
          break;
      }
      return (
        <Box>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              color: "#626477",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            {icon}
            {row.role}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "currentPlan",
    headerName: "PLAN",
    flex: 0.2,
    minWidth: 100,
    headerClassName: "super-app-theme--header",

    renderCell: ({ row }: CellType) => {
      return (
        <Box>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              color: "#626477",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            {row.currentPlan}
          </Typography>
        </Box>
      );
    },
  },

  {
    field: "status",
    headerName: "STATUS",
    flex: 0.1,
    minWidth: 75,
    headerClassName: "super-app-theme--header",

    renderCell: ({ row }: CellType) => {
      return (
        <Box
          sx={{
            backgroundColor:
              row.status === "active"
                ? "#E5F4DF"
                : row.status === "inactive"
                ? "#E6E7EA"
                : "#F8EFDE",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "20px",
            "&:focus": {
              outlineWidth: 0,
            },
          }}
        >
          <Typography
            variant="subtitle2"
            component="p"
            sx={{
              color:
                row.status === "inactive"
                  ? "#626477"
                  : row.status === "active"
                  ? "#72E028"
                  : "#F8C04B",
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            {row.status}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "ACTIONS",
    headerName: "ACTIONS",
    headerClassName: "super-app-theme--header",
    flex: 0.1,
    minWidth: 90,
    renderCell: ({ row }: CellType) => {
      return <ActionButton id={row.id} />;
    },
  },
];

export default function DataTable({ rows }: Props) {
  return (
    
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        autoPageSize={false}
        sx={{
          flexShrink: 1,
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "#EDEFF1",
            color: "rgba(76, 78, 100, 0.87)",
          },
          ".MuiDataGrid-columnSeparator": {
            visibility: "visible",
          },
          "& .super-app-theme--header": {
            "&:focus": {
              outlineWidth: 0,
            },
          },
          "& .MuiDataGrid-cell": {
            "&:focus": {
              outlineWidth: 0,
            },
          },
        }}
      />
   
  );
}
