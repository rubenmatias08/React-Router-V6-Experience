//(UseParams) allow us to access the parameters of the current URL
//(useNavigate) let us navigate programmatically (redirectioning)
import { useParams, useNavigate } from "react-router-dom";

const ContactsDetails = () => {
    //In (useParams) i´m using the id provided in (main.jsx)
    const {id} = useParams();

    //redirect
    //(useNavigate) (Example: We submit something and after submit we will be redirectioned for another page) 
    const navigate = useNavigate()

   /*
   By clicking on the button, it will send a message to the console and redirect us to a page due to the const (navigate) that has useNavigate that allows us that redirection.
   It will redirect us to (Home) , which has the path ("/")
   */
    const handleContact = () => {
        console.log(`Sent to ${id}`)
        return navigate("/")
    }

    
    return(
        <div>
            <h2>Displaying more contact information {id}</h2>
            {/*onClick event will activate the function (handleContact) */}
            <button onClick={handleContact}>Send a message</button>
        </div>

    )
};

export default ContactsDetails;