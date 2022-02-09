import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct, updateCart } from '../../../redux/CartStore/CartActions';
import { Product } from '../../../redux/CartStore/Types';
import { formatter } from '../../../shared/helpers';
import './CartItem.css';

function CartItem({product} : {product: Product}) {
    const dispatch = useDispatch();
    const updateItemCount = (product:Product, count: number) => {
        if(product.quantity === 1 && count === -1) dispatch(removeProduct(product));
        else {
            product = {
                ...product,
                quantity: count
            };
            dispatch(updateCart(product));
        }
    }
    return <div className='cart-item'>
        <div className='details'>
            <img src={product.details.image} alt=''/>
        </div>
        <div className='details'>
            <div className='row'>
                {product.details.name}
            </div>
            <div className='row'>
                {
                    formatter.format(product.quantity * (product.details.price / 100 ))
                }
            </div>
            <div className='row'>
                Quantity:&nbsp; 
                <input className='changeCount' type="button" value="-" onClick={() => updateItemCount(product, -1)}/>
                &nbsp;{product.quantity}&nbsp;
                <input className='changeCount' type="button" value="+" onClick={() => updateItemCount(product, 1)}/>
            </div>
            <div className='row'>
                <input className='removeItem' type="button" value="Remove from cart" onClick={() => dispatch(removeProduct(product))}/>
            </div>
        </div>
    </div>;
}

export default React.memo(CartItem);
