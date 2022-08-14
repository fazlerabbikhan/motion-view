import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
            .then(res => res.json())
            .then(data => setProducts(data.data));
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='text-4xl my-10 text-warning font-bold text-center'>Products</h1>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product
                            key={products.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;