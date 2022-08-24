import React from 'react';

const Product = ({ product, addToCart }) => {

    const { name, image, regular_price, sale_price, stock } = product;

    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img className='p-5' src={`https://idbdev.com/motion2/public/images/${image}`} alt="" /></figure>
            <div className="card-body">
                <h1 className="card-title font-bold text-2xl">{name}</h1>
                <p>Regular price: {regular_price}</p>
                <p>Sale price: {sale_price}</p>
                <p>Stock: {stock}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => addToCart(product)}
                        disabled={stock < 1}
                        className="btn btn-warning btn-sm text-white">
                        {
                            stock > 1
                                ? <span>Add to Cart</span>
                                : <span className='text-red-600'>Out of Stock</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;