import React from 'react';
import { Link } from 'react-router-dom';

// import style
import '../App.css';

// import images
import logo from '../Images/hm_logo_1.png';

function Header() {
    return (
        <header style={{ class: 'header', padding: '5px', backgroundColor: '#f4f4f4' }}>
            <div style={{ position: 'dynamic', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo or Site Title */}
                <div>
                    <Link to='/'><h1 style = {{ color: 'black', lineHeight: '0em' }}>the digital portfolio.</h1></Link>
                    {/* <Link to='/'><img src={logo} alt='logo' style = {{height: '40px', width: 'auto', alignItems: 'center'}} ></img></Link> */}
                </div>

                {/* Navigation Links */}
                <div style={{ class: 'header', position: 'dynamic', right: '0'}}>
                    <nav>
                        <Link to="/about" style={{ class: 'a', position: 'right', marginRight: '10px'}}>about</Link>
                        <Link to="/contact" style={{ class: 'header',  position: 'right', marginRight: '10px' }}>contact</Link>
                        <Link to="https://drive.google.com/file/d/1xQjBmGY8R84_w-audeARdjOIfOKaq9H1/view?usp=sharing" style={{ class: 'header',  position: 'right', marginRight: '10px' }}>cv</Link>
                    </nav>
                </div>
            </div>
        <div style={{ borderTop: '2px solid black', width: '100%' }}></div>

    </header>

    );
}

export default Header;