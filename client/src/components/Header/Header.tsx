import React from 'react';
import h24logo from '../../assets/h24logo.svg'
import './Header.css'

function Header() {
  return (
    <div className={'header'}>
        <div className='logo'>
            <img src={h24logo} alt='Failed To Load'/>
        </div>
        <div className='search'>
            <input placeholder={'Search'} />
        </div>
    </div>
  );
}

export default Header;
