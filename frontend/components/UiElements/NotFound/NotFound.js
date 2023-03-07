import React from 'react';
import NotFoundWrapper, { Title } from './NotFound.styled';

const NotFound = ({ title }) => {
  return (
    <NotFoundWrapper>
      <Title>{title ? title : 'Page not found 😔'}</Title>
    </NotFoundWrapper>
  );
};

export default NotFound;
