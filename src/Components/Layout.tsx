import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export default Layout;
