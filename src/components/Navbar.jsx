import React from 'react'
import {Link, link} from "react-scroll"
function Navbar() {
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Projects' },
        { id: 3, text: 'Skills' },
        { id: 4, text: 'Contact' }
    ];

  return (
    
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
        <div className="flex justify-between items-center h-16">
            <div className="flex space-x-2">
               
                <img src="" alt=""/>
                <h1 className="font-semibold text-xl cursor-pointer">Rishabh Bhandari</h1>
            </div>
            <div>
                <div>
                    <ul className="flex space-x-8">
                        {navItems.map(({ id, text }) => (
                        <li key={id} className="text-xl hover:scale-105 duration-200 cursor-pointer ">
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            activeClass="active">{text}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>  
        </div>      
    </div>
  )
}

export default Navbar