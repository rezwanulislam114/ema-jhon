import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {(user.displayName || user.email) && <span style={{ color: '#888' }}>{user.displayName} </span>}
                {
                    !(user.email || user.displayName) ?
                        <NavLink to="/signin">Sign in</NavLink> :
                        <button onClick={logOut}>Sign Out</button>
                }
            </nav>
        </div>
    );
};

export default Header;