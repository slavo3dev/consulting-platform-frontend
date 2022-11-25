
import { FC } from "react"
import Image from 'next/image'
import logo from '../../../public/logo192.png'
import { PopUp } from '../popUp/index';



export const Header: FC = () => {
    return <header> 
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-cyan-600 relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">
                <div>
                  <Image src= {logo}  className="rounded-full w-16" alt="" />
                </div>
                <div>
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                   <li className="nav-item"> 
                      <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
                   </li> 
                   <li className="nav-item">
                      <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>
                   </li>
                   
                   <li className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"  data-mdb-ripple="true" data-mdb-ripple-color="light">  
                    <PopUp />
                    
                   </li>
                   <li className="nav-item">  
                    <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Contact</a> 
                   </li>

                   
                   
                </ul></div>
            </div>
            
        </nav>
    </header>
}