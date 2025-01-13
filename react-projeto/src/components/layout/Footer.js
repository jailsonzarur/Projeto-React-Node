import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer() {
    return(
        <>
            <footer className={`bg-sky-950 rounded-lg shadow px-4 py-2 sm:px-6 lg:px-8 dark:bg-gray-800 mb-0 ${styles.footer_fixo}`}>
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-white sm:text-center dark:text-white">© 2025 <Link to="/" class="hover:underline">MinhaLogo™</Link>. Todos os direitos reservados.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/sobre" class="hover:underline me-4 md:me-6">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/politicas" class="hover:underline me-4 md:me-6">Políticas de Privacidade</Link>
                    </li>
                    <li>
                        <Link to="/licensa" class="hover:underline me-4 md:me-6">Licensa</Link>
                    </li>
                    <li>
                        <Link to="/licensa" class="hover:underline me-4 md:me-6">Contato</Link>
                    </li>
                </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer