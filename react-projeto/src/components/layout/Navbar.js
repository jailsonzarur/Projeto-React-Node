import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    function changeMenu() {
        if(showMenu === false) setShowMenu(true)
        else setShowMenu(false)
    }

    return(
        <>
            <nav class="bg-sky-950 text-white p-4 font-inter">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    
                    <a href="/" class="text-2xl font-bold">MinhaLogo</a>
                    
                    <ul class="hidden md:flex space-x-6">
                        <li>
                            <Link to="/" class="transition hover:bg-blue-300 p-2 rounded duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/planilha" class="transition hover:bg-blue-300 p-2 rounded duration-300">Criar Planilha</Link>
                        </li>
                    </ul>
                    
                    <button id="menu-btn" class="md:hidden focus:outline-none" onClick={changeMenu}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {showMenu && (
                    <div id="mobile-menu" className={`transition-all duration-1000 opacity-0 max-h-0 overflow-hidden ${showMenu ? 'opacity-100 max-h-[500px]' : ''}`}>
                        <ul class="flex flex-col space-y-4 p-4 bg-sky-900">
                            <li>
                                <Link to="/" class="hover:bg-blue-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/planilha" class="hover:bg-blue-300">Criar Planilha</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}  

export default Navbar