import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import all_products from '../api/products.json'
import { addItemToCart, setProducts } from './ProductSlice';

function Product() {
    // console.log(all_products);
    const products = useSelector(state => state.product.products);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(all_products));
    }, [])
    return (
        <div className='d-flex flex-column my-4'>
            <h3>
                Products
            </h3>
            {
                products.map((product, index) =>
                    <div key={index} className='d-flex flex-column me-auto my-3 w-50'>
                        <div>
                            {product.title} - {'$' + product.price} {product.inventory > 0 ? ' x ' + product.inventory : ''}
                        </div>
                        <button type='button' className='btn btn-secondary btn-sm col-2' disabled={product.inventory < 1 ? true : false} onClick={() => dispatch(addItemToCart(product))}>{product.inventory < 1 ? 'Sold Out' : 'Add to cart'}</button>
                    </div>
                )
            }
            <hr />
        </div>
    )
}

export default Product