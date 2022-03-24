import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutCart } from './CartSlice';

function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems);

    const dispatch = useDispatch();

    const totalAmount = cartItems.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
    return (
        <div className='d-flex flex-column my-4'>
            <h3>
                Your Cart
            </h3>
            <div className='d-flex flex-column my-3 w-50'>
                {cartItems.length > 0 ?
                    cartItems.map((item, index) =>
                        <div key={index}>
                            {item.title} - {'$' + item.price} x {item.quantity}
                        </div>
                    )
                    :
                    <div className='fst-italic'>
                        Please add some products to cart.
                    </div>
                }
                <div className='my-3'>
                    Total: {' $' + totalAmount.toFixed(2)}
                </div>
                <button type='button' className='btn btn-danger btn-sm col-sm-4' disabled={cartItems.length < 1 ? true : false} onClick={() => dispatch(checkoutCart())}>Checkout</button>
            </div>
            {/* {
                products.map((product, index) =>
                    <div key={index} className='d-flex flex-column me-auto my-3 w-50'>
                        <div>
                            {product.title} - {'$' + product.price} x {product.inventory}
                        </div>
                        <button type='button' className='btn btn-secondary btn-sm px-2 col-2' disabled={false}>Add to cart</button>
                    </div>
                )
            } */}
        </div>
    )
}

export default Cart