import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';
import Cart from './Cart';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
            .then(res => res.json())
            .then(data => setProducts(data.data));
    }, [])

    // handle Add to Cart button
    const addToCart = (product) => {
        if (cart.length <= 3 && cart.indexOf(product) === -1) {
            const newCart = [...cart, product];
            setCart(newCart);
            console.log(newCart);
        }
        else if (cart.indexOf(product) !== -1) {
            alert('You have already selected this item.');
        }
        else {
            alert('You can add maximum 4 items at one order.');
        }
    }

    //handle remove from cart
    const removeItem = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };

    return (
        <div className='my-20'>
            <h1 className='text-4xl my-10 text-warning font-bold text-center'>Products</h1>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product
                            key={products.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        cart={cart}
                        removeItem={removeItem}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;