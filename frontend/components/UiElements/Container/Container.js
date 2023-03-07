import React from "react";
import ContainerArea from "./Container.styled";

const Container = ({ children }) => {
  return <ContainerArea className="!w-sreen">{children}</ContainerArea>;
};

export default Container;
