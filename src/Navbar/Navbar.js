import React from 'react'
import './Navbar.css'
import  SearchIcon from "@material-ui/icons/Search"
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Extra/StateProvider';
import { auth } from '../Main/firebase';

function Navbar() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication =() => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="navbar">
            <Link to="/" className="link">
                <div className="navbar_logo">
                    <StorefrontIcon className="logo" />
                    <span>Store</span>
                </div>
            </Link>
            <div className="navbar_search">
                <input className="searchInput" type="text" />
                    <SearchIcon 
                    className="nav_searchIcon"
                    />
            </div>

            <div onClick={handleAuthentication} className="navbar_option">
                <Link to={!user && '/login'} className="link">
                <div className="option1">
                    <span className="line1">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className="line2">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>

                <div className="option1">
                    <span className="line1">
                        Return
                    </span>
                    <span className="line2">
                        & Order
                    </span>
                </div>

                <Link to="/checkout" className="link">
                    <div className="basket">
                        <ShoppingBasketIcon />
                        <span className="line2 basketcount"> {basket?.length} </span>
                    </div> 
                </Link>
            </div>

        </div>
    )
}

export default Navbar
