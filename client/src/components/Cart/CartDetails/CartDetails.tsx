import React from 'react';
import { Product } from '../../../redux/CartStore/Types';
import { cartDetails } from '../../../shared/helpers';
import './CartDetails.css';

function CartDetails({products} : { products: Product[] }) {
    const [totalQty, totalAmt] = cartDetails(products);
    return <div className='cartDetails'>
        <div>
            <i>Items: <b>{totalQty}</b></i>
        </div>
        <div>
            <i>Total Value: <b>{totalAmt}</b></i>
        </div>
    </div>;
}

export default CartDetails;
