import React from 'react';
import Wrapper from './IconButton.styled';

const IconButton = ({ onClick, children }) => <Wrapper onClick={onClick}>{children}</Wrapper>;

export default IconButton;