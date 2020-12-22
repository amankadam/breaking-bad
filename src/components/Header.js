import React from 'react';
import Logo from '../logo.png';
import Search from './Search';
function Header(){
return(
    <nav className="navBar">
        <img src={Logo} className='logo'/>
         <Search />
    </nav>
)
}
export default Header;