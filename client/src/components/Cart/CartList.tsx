import React from 'react';
import { useSelector } from 'react-redux';
import { Cart } from '../../redux/CartStore/Types';
import CartDetails from './CartDetails/CartDetails';
import CartItem from './CartItems/CartItem';

function CartList() {
    const products = useSelector((state: Cart) => state.products);
    return <div> 
        <h1 style={{
            paddingLeft: '2rem'
        }}>Cart</h1>
        <div style={{ display: "flex" }}>
            {
                products.length > 0 ? <div style={{ flexGrow: '1.5' }}>
                    {
                        products.map(product => <CartItem key={product.id} product={product}/>)
                    }
                </div> : <div style={{ 
                    flexGrow: '1.5',
                    textAlign: 'center',
                    position: 'relative',
                    top: '5rem',
                    maxHeight: '10rem'
                  }}>Nothing in Here :(</div>
            }
            <div style={{ 
                flexGrow: '1',
                minHeight: "26.5rem",
                maxWidth: "30%",
                maxHeight: "30rem"
            }}>
                <CartDetails products={products}/>
            </div>
        </div>
    </div>
}

export default CartList;
