import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <div className='text-secondary font-bold text-center'>
                <h2>Order Summary</h2>
            </div>
            <div>
                {
                    cart.map(product =>
                        <div className='px-6 pt-6'
                            key={product.id}>
                            <div>
                                <img src={product.image} alt="" />
                            </div>
                            <div>
                                <h4 className='font-bold'>{product.name}</h4>
                                <h5>Regular Price: {product.regular_price}</h5>
                                <h5>Sale Price: {product.sale_price}</h5>
                                <h5>Stock: {product.stock}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;