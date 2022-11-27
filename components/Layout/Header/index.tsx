
import { FC } from "react";
import Image from 'next/image';
import logo  from '../../../public/logo192.png';
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




 
// function App() {
 
 
//   return <div>
//     <input
//       type="button"
//       value="Click to Open Popup"
//       onClick={togglePopup}
//     />
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//     {isOpen && <Popup
//       content={<>
//         <b>Design your Popup</b>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//         <button>Test button</button>
//       </>}
//       handleClose={togglePopup}
//     />}
//   </div>
// }
 