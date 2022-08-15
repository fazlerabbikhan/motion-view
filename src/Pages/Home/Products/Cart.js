import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeItem }) => {

    const [quantity, setQuantity] = useState(1);

    //handle increase quantity
    const increaseQuantity = () => {
        if (quantity < 10) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
        }
    };

    //handle decrease quantity
    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    }

    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div>
            <div className='text-primary text-2xl font-bold text-center'>
                <h2>Cart</h2>
            </div>
            <div>
                {
                    cart.map(product =>
                        <div className='flex justify-evenly pt-12'
                            key={product.id}>
                            <div className='grid grid-cols-1 gap-3'>
                                <button
                                    onClick={() => increaseQuantity(product)}
                                    className='btn btn-primary btn-sm text-white'>+</button>
                                <button
                                    onClick={() => decreaseQuantity(product)}
                                    className='btn btn-secondary btn-sm text-white'>-</button>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <h4 className='font-bold'>{product.name}</h4>
                                    <h5>Quantity: {quantity}</h5>
                                    <h5>Subtotal: {product.sale_price}</h5>
                                </div>
                                <div className='ml-6'>
                                    <button className='btn btn-error btn-xs text-white' onClick={() => removeItem(product)}>X</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={() => navigateToCheckout()}
                    disabled={cart.length === 0}
                    className='btn btn-accent text-bold text-white mt-6 flex justify-center'>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;