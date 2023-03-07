import React from 'react';
import Link from 'next/link';
import Wrapper from './Logo.styled';

const Logo = ({ path, src, style }) => {
  return (
    <Link href={path}>
      <Wrapper className="logo" style={style}>
        {src}
      </Wrapper>
    </Link>
  );
};

export default Logo;
