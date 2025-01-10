import { useState } from "react"

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    function changeMenu() {
        if(showMenu === false) setShowMenu(true)
        else setShowMenu(false)
    }

    return(
        <>
            <nav class="bg-blue-600 text-white p-4">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    
                    <a href="#" class="text-2xl font-bold">MinhaLogo</a>
                    
                    <ul class="hidden md:flex space-x-6">
                        <li><a href="#home" class="hover:text-blue-300">Home</a></li>
                        <li><a href="#about" class="hover:text-blue-300">Sobre</a></li>
                        <li><a href="#services" class="hover:text-blue-300">Serviços</a></li>
                        <li><a href="#contact" class="hover:text-blue-300">Contato</a></li>
                    </ul>
                    
                    <button id="menu-btn" class="md:hidden focus:outline-none" onClick={changeMenu}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {showMenu && (
                    <div id="mobile-menu">
                        <ul class="flex flex-col space-y-4 px-4 pb-4 bg-blue-700">
                            <li><a href="#home" class="hover:text-blue-300">Home</a></li>
                            <li><a href="#about" class="hover:text-blue-300">Sobre</a></li>
                            <li><a href="#services" class="hover:text-blue-300">Serviços</a></li>
                            <li><a href="#contact" class="hover:text-blue-300">Contato</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}  

export default Navbar