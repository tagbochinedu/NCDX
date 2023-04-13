import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Forms from "./Pages/Forms";
import ComingSoon from "./Pages/ComingSoon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UnderMaintenance from "./Pages/UnderMaintenance";
import NotFound from "./Pages/NotFound";
import NotAuthorized from "./Pages/NotAuthorized";
import ServerError from "./Pages/ServerError";
import Theming from "./Pages/Theming";
import { useSelector } from "react-redux";
import { selectAllThemes, State } from "./Features/Themes/ThemesSlice";

const App: React.FC = () => {
  const themeState: State[] = useSelector(selectAllThemes);

  useEffect(() => {
    console.log(themeState, themeState[0].primaryColor);
  }, [selectAllThemes]);

  const theme = createTheme({
    palette: {
      primary: {
        main: themeState[0].primaryColor === "#72E028" ? "#72E028" : "#F8C04B", // Change primary color to red
      },
      secondary: {
        main: "#00FF00", // Change secondary color to green
      },
     
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/users" element={<Users />} />
          <Route path="/util/coming-soon" element={<ComingSoon />} />
          <Route
            path="/util/under-maintenance"
            element={<UnderMaintenance />}
          />
          <Route path="/util/page-not-found-404" element={<NotFound />} />
          <Route path="/util/not-authorized-401" element={<NotAuthorized />} />
          <Route path="/util/server-error-500" element={<ServerError />} />
          <Route path="/theming-control" element={<Theming />} />
        </Routes>
      </Home>
    </ThemeProvider>
  );
};

export default App;
