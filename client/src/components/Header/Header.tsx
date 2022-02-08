import React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../redux/CartStore/Types';
import { useSelector } from 'react-redux';
import h24logo from '../../assets/h24logo.svg';
import AddToCart from '../../assets/AddToCart.png';
import Search from '../Search/Search';
import './Header.css'

function Header() {
  const products = useSelector((state: Cart) => state.products);
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
            <img src={h24logo} alt='Failed To Load'/>
        </div>
      </Link>
      <Search />
      <Link to='/cart'>
        <div className='cartCount'>
          <div>
            <span>{
              products.reduce((total, product) => { return product.quantity + total }, 0)
            }</span>
          </div>
          <img className='addToCart' src={AddToCart} alt=''/>
        </div>
      </Link>
    </div>
  );
}

export default Header;
