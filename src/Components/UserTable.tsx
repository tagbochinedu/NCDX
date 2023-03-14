import * as React from "react";
import { DataGrid, GridColDef, GridColumnMenu } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "USER",
    headerName: "USER",
    width: 245,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "EMAIL",
    headerName: "EMAIL",
    width: 270,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "ROLE",
    headerName: "ROLE",
    width: 210,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "PLAN",
    headerName: "PLAN",
    width: 200,
    headerClassName: "super-app-theme--header",
  },

  {
    field: "STATUS",
    headerName: "STATUS",
    headerClassName: "super-app-theme--header",
    width: 130,
  },
  {
    field: "ACTIONS",
    headerName: "ACTIONS",
    headerClassName: "super-app-theme--header",
    width: 131,
  },
];

const rows = [
  {
    id: 1,
    USER: "Snow",
    EMAIL: "Jon",
    ROLE: "35 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 2,
    USER: "Lannister",
    EMAIL: "Cersei",
    ROLE: "42 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 3,
    USER: "Lannister",
    EMAIL: "Jaime",
    ROLE: "45 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 4,
    USER: "Stark",
    EMAIL: "Arya",
    ROLE: "16 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 5,
    USER: "Targaryen",
    EMAIL: "Daenerys",
    ROLE: null,
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 6,
    USER: "Melisandre",
    EMAIL: null,
    ROLE: "150",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 7,
    USER: "Clifford",
    EMAIL: "Ferrara",
    ROLE: "44 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 8,
    USER: "Frances",
    EMAIL: "Rossini",
    ROLE: "36 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
  {
    id: 9,
    USER: "Roxie",
    EMAIL: "Harvey",
    ROLE: "65 ",
    PLAN: "nothing",
    STATUS: "nothing",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 475, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[100]}
        checkboxSelection
        autoPageSize={true}
        slots={{
          columnMenu: GridColumnMenu,
        }}
        sx={{
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "#EDEFF1",
            color: "rgba(76, 78, 100, 0.87)",
          },
          ".MuiDataGrid-columnSeparator": {
            visibility: "visible",
          },
        }}
      />
    </div>
  );
}
