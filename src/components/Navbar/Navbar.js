import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component{

    render(){
        return(
            <div>
                <nav className="logo">
                    <div>
                        <h4>Karim Benyassine</h4>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a className="cool-links" href="/">Home</a>
                        </li>
                        <li>
                            <a className="cool-links" href="/projects">Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
