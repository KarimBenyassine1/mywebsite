import React from 'react';
import "./Navbar.css";

import Resume from 'Karim_Benyassine_Resume copy.pdf';

class Navbar extends React.Component{

    render(){
        return(
            <div className="nav-wrapper">
                <nav className="logo">
                    <div>
                        <h4>Karim Benyassine</h4>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a className="cool-links" href={Resume}>
                            <img
                            style={{position:"relative", top: "5px"}}
                            width={"50px"}
						    src='https://www.pngjoy.com/pngl/949/11006793_resume-icon-resume-download-icon-png-download.png'
						    alt=''
					        />
                            </a>
                        </li>
                        <li>
                            <a className="cool-links" href="https://www.linkedin.com/in/karim-benyassine-7174841b7/">
                            <img
                            style={{paddingTop: "7px"}}
                            width={"50px"}
						    src='https://img.icons8.com/ios/452/linkedin.png'
						    alt=''
					        />
                            </a>
                        </li>
                        <li>
                            <a className="cool-links" href="https://github.com/KarimBenyassine1">
                                <img
                                width={"60px"}
                                src="https://cdn.iconscout.com/icon/free/png-256/github-brand-logo-47401.png"
                                alt=''
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;
