import logo from '../images/logo.svg'
import { Pagelinks, SocialLinks } from './Links';

export function Navbar() {
    return <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <Pagelinks linkClass='nav-link' parentClass="nav-links" id="nav-links" />
            <SocialLinks parentClass="nav-icons" linkClass="nav-icon" />
        </div>
    </nav>;
}




