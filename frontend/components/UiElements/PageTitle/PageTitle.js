import React from "react";
import Container from "../Container/Container";
import Section, { Title, Subtitle, Backdrop } from "./PageTitle.styled";

const PageTitle = ({ title, subtitle, backdrop, bgColor }) => {
  return (
    <Section style={{ backgroundColor: bgColor }}>
      <Container>
        <Title className="mx-8">{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Container>
      {backdrop && <Backdrop></Backdrop>}
    </Section>
  );
};

PageTitle.defaultProps = {
  backdrop: true,
};

export default PageTitle;