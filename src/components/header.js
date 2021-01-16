import React, {useState} from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import {Link} from 'react-router-dom';
import logo from '../img/BRUTES_Logo_Round_B_S.png';

export default function Header() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/squad"><img src={logo} alt='logo'/>Marketplace</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/squad">Squad</Link></li>
                <li><Link to="/">Weapon</Link></li>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/">Art Design</Link></li>
                <li><Link to="/">Login / Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30"/>
                </li>
            </ul>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" className="menu"/>
            </div>
      </header>
    )
}

