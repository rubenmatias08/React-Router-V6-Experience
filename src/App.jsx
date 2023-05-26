import './App.css'
//Outlet is used in this parent route element to render their child route elements.
import { Outlet } from 'react-router-dom'
//NavBar with navigation links
import NavBar from './components/NavBar'


function App() {

  return (
    <div className='app'>
      <NavBar/>
      <h1>React Router</h1>
      <Outlet />
    </div>
  )
}

export default App
