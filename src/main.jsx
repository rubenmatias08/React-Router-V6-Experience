import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Router setup
import {createBrowserRouter , RouterProvider, Navigate} from 'react-router-dom'

//Routes
const routing = createBrowserRouter([
  {
    path:"/",
    //Main element (Parent Element)
    element:<App/>,
    //Error page (in case of not founding some URL):
    errorElement: <ErrorPage/>,
    //Links inside the main element (children elements)
    children:[
              {path:"/",element:<Home/>},
              {path:"contacts", element:<Contacts/>},
              //Nested Routes
              //(:id) it´s for dynamic data. Meaning: The result changes depending on the data
              {path:"contacts/:id", element:<ContactsDetails/>},
              //Redirection
              //(Example: you are trying to access a link that is updated now with a different url, then you will be redirected to the updated link.)
              {path:"oldcontact", element:<Navigate to="/contacts"/>}

            ]
  }
])

//Pages
import Home from './routes/Home.jsx'
import Contacts from './routes/Contacts.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactsDetails from './routes/ContactsDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*(routing) as props in router to provide us the routes inside the const*/}
    <RouterProvider router={routing} />
  </React.StrictMode>,
)
