import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  position: relative;
  width: 100%;
`;

interface ContentContainerType {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerType> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

export default ContentContainer;
