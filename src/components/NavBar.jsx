import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <div>
            <nav>
            <Link to = "/">HOME</Link>
            <Link to= "/contacts">CONTACTS</Link>
            </nav>
        </div>
    )
};

export default NavBar;