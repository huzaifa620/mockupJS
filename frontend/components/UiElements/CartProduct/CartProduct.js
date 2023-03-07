import React from 'react';
import { NextImage } from '../Image/Image';
import Wrapper, { Image, Content, Header, Title, Price, Quantity, Footer, Color, Button } from './CartProduct.styled';

const CartProduct = ({ thumb, title, quantity, price, color, onClick, removable, hideBorderBottom, style }) => {
  return (
    <Wrapper $hideBorderBottom={hideBorderBottom} style={{ style }}>
      <Image>
        <NextImage
          src={thumb.src}
          width={thumb.width}
          height={thumb.height}
          alt="Gallery"
        />
      </Image>
      <Content>
        <Header>
          <Title>{title}</Title>
          <Price>$ {price}</Price>
        </Header>
        <Quantity>{quantity}</Quantity>
        <Footer>
          {removable && <Button onClick={onClick}>Remove</Button>}
          {color && <Color>Color {color}</Color>}
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default CartProduct;
