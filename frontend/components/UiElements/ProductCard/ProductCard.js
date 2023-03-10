import React from 'react';
import Link from 'next/link';
import { NextImage } from '../Image/Image';
import { Product, ImageWrapper, Title, Price } from './ProductCard.styled';

const ProductCard = ({ href, as, thumb, title, price, alignItem }) => {
  return (
    <Link href={href} as={as}>
      <Product className="product" $alignItem={alignItem}>
        <ImageWrapper>
          <NextImage
            src={thumb.src}
            width={thumb.width}
            height={thumb.height}
            alt={title}
          />
        </ImageWrapper>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Product>
    </Link>
  );
};

export default ProductCard;