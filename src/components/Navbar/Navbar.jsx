import React from 'react';
import logo from './../../img/online-shop-logo-designs-concept-vector-online-store-logo-designs_7649-661.avif'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <section className="top-nav">
      <img src={logo} alt="" id="logo" />
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>HOME</li>
        <li>STORE</li>
        <li>PRODUCTS</li>
        <li>CART</li>
        <li>BUY</li>
      </ul>
    </section>
        </div>
    );
};

export default Navbar;