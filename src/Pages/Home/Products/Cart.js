import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = ({ cart, removeItem, setCart }) => {

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
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            quantity={cartItem.quantity}
                            subtotal={cartItem.subtotal}
                            removeItem={removeItem}
                            setCart={setCart}
                        ></CartItem>)
                }
            </div>
            <div className='my-6'>
                <h1 className='font-bold flex justify-center'>Grand Total: </h1>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={() => navigateToCheckout()}
                    disabled={cart.length === 0}
                    className='btn btn-accent text-bold text-white flex justify-center'>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;