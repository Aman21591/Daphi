import React from 'react';
import Header_log from './Header_log.svg';
import  './Header.css';
import Advertisment from '../About/Advertisment';
import Advertisment_footer from '../About/Advertisment_footer';

const Header= () =>{
    return(
        <div>
        <nav>
  <div className='header_box'>
    <a className="navbar-brand" >
    <img src={Header_log} className='image_size' />
    </a>
  </div>
</nav>
<Advertisment />
<Advertisment_footer />
</div>
    );
}
export default Header;