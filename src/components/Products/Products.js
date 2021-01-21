import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

// import useStyles from './styles';

const products = [
    {id: 1, name:'Iphone', description:'Black Phone', price:'$600', image:'https://imgur.com/4kIs7Q1.png'},
    {id: 2, name:'Galaxy', description:'Black Phone', price:'$1100', image:'https://imgur.com/xOUpucS.png'}
]

export const Products = () => {
//   const classes = useStyles();

  return (
    <main >
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={ product } />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

