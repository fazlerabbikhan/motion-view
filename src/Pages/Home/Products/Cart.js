import React from 'react';

const Cart = ({ cart, removeItem }) => {

    return (
        <div>
            <div className='text-secondary text-2xl font-bold text-center'>
                <h2>Cart</h2>
            </div>
            <div>
                {
                    cart.map(product =>
                        <div className='flex justify-center px-6 pt-6'
                            key={product.id}>
                            <div>
                                <img src={product.image} alt="" />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <h4 className='font-bold'>{product.name}</h4>
                                    <h5>Regular Price: {product.regular_price}</h5>
                                    <h5>Sale Price: {product.sale_price}</h5>
                                    <h5>Stock: {product.stock}</h5>
                                </div>
                                <div className='ml-12'>
                                    <button className='btn btn-error btn-xs text-white' onClick={() => removeItem(product)}>X</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;