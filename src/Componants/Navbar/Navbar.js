import React from 'react';
import './Navbar.css'

const navbar = () => {
    return (
        <nav className='nav'>
            <h1>MEAL DB</h1>
            <div>
                <a href="/order">Order</a>
                <a href="/about">About</a>
                <a href="/signup">Sign Up</a>
            </div>
        </nav>
    );
};

export default navbar;