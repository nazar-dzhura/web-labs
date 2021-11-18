import React from 'react'
import './header.css'
import {CATALOG_ROUTE, HOME_ROUTE} from "../../utils/routes";
import {NavLink} from "react-router-dom";

function Header(){
    return (
        <header className="header border-b p-3 flex justify-between items-center">
            <h1 className="header__title">
                Bookstore Manager
            </h1>
            <div className="header__navigation">
                <NavLink to={HOME_ROUTE} className="header__navigation-link" activeClassName="header__navigation-link-active">Home</NavLink>
                <NavLink to={CATALOG_ROUTE} className="header__navigation-link" activeClassName="header__navigation-link-active">Catalog</NavLink>
            </div>
        </header>
    )
}

export default Header;