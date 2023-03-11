import React from "react";
import ProductItem from "./ProductItem";

import { Wrapper, FaveH2, FaveUl } from "./ProductStyles";

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 24,
    title: 'Leather Loafers',
    description: 'Beautifully crafted Italian loafers'
  },
  {
    id: 'p3',
    price: 83,
    title: 'Noise Cancellation Earbuds',
    description: 'The best sounds from earbuds of this price range'
  }
]

const Products = () => {
  return (
    <>
      <Wrapper>
        <FaveH2>Buy your favorite products</FaveH2>
        <FaveUl>
          {DUMMY_PRODUCTS.map(product => <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)}
          
        </FaveUl>
      </Wrapper>
    </>
  );
};

export default Products;
