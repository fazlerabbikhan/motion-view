import React, { useState } from 'react';

const CartItem = ({ cartItem, removeItem, setCart }) => {

    const { name, sale_price } = cartItem;

    const [quantity, setQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(sale_price);

    //handle increase
    const handleIncrease = () => {
        if (quantity < 10) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            const subtotal = newQuantity * sale_price;
            setSubtotal(subtotal);
        }
    };

    //handle decrease
    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            const subtotal = newQuantity * sale_price;
            setSubtotal(subtotal);
        }
    }

    cartItem.subtotal = parseInt(subtotal);

    return (
        <div className='flex justify-evenly mt-6'>
            <div className='grid grid-cols-1 gap-3'>
                <button
                    onClick={handleIncrease}
                    className='btn btn-primary btn-sm text-white'>+</button>
                <button
                    onClick={handleDecrease}
                    className='btn btn-secondary btn-sm text-white'>-</button>
            </div>
            <div>
                <h4 className='font-bold'>{name}</h4>
                <h5>Quantity: {quantity}</h5>
                <h5>Subtotal: {subtotal}</h5>
            </div>
            <div>
                <button className='btn btn-error btn-xs text-white' onClick={() => removeItem(cartItem)}>X</button>
            </div>
        </div>
    );
};

export default CartItem;