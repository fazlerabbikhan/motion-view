import React from 'react';

const Product = ({ product }) => {
    const { id, name, image, regular_price, sale_price, stock } = product;

    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img className='p-5' src={image} alt="" /></figure>
            <div className="card-body">
                <h1 className="card-title font-bold text-2xl">{name}</h1>
                <p>Regular price: {regular_price}</p>
                <p>Sale price: {sale_price}</p>
                <p>Stock: {stock}</p>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-warning btn-sm text-white">Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;