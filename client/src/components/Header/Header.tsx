import React from 'react';
import h24logo from '../../assets/h24logo.svg'
import Search from '../Search/Search';
import './Header.css'

function Header() {
  return (
    <div className={'header'}>
        <div className='logo'>
            <img src={h24logo} alt='Failed To Load'/>
        </div>
        <Search />
    </div>
  );
}

export default Header;
