import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Forms from "./Pages/Forms";
import ComingSoon from "./Pages/ComingSoon";

import Layout from "./Components/Layout";

const App: React.FC = () => {
  return (
    <div>
      <Home>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/users" element={<Users />} />
            <Route path="/util/coming-soon" element={<ComingSoon />} />
          </Routes>
        </Layout>
      </Home>
    </div>
  );
};

export default App;
