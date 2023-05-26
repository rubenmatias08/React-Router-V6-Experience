import { Link } from 'react-router-dom';

const Contacts = () => {
    return(
        <div>
        <h1>CONTACTS</h1>
        <p>Contacts page</p>
        {/*Nested Routes */}
        <p><Link to = "/contacts/1">Contact 1</Link></p>
        <p><Link to = "/contacts/2">Contact 2</Link></p>
        <p><Link to = "/contacts/3">Contact 3</Link></p>
        </div>
    )
};

export default Contacts;