import React from "react";

import { Layout } from "./layoutContainer.styles";
interface LayoutContainerType {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerType> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutContainer;
