import About from "./component/About"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Settings from "./component/Settings"
import Navbar from "./component/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
        <BrowserRouter>

                <Routes>

                     <Route path = '/' element = {<Home/>} />
                     <Route path = '/About' element = {<About/>} />
                     <Route path = '/Contact' element = {<Contact/>} />
                     <Route path = '/Settings' element = {<Settings/>} />
                     <Route path = '/Navbar' element = {<Navbar/>} />




                </Routes>





        </BrowserRouter>
    </>
  )
}

export default App
