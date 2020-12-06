import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image:'https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple trash', price: '$1000',image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=892&hei=820&&qlt=80&.v=1603332212000'}
];

export default function Products() {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
