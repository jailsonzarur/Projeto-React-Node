import Container from "./utils/Container"
import { Link } from "react-router-dom"

function HomeSlide() {
    return(
        <>
            <Container>
                <div class="flex-col m-auto text-center mt-10 px-4 py-2 sm:px-6 lg:px-8 ">
                    <h1 className="text-4xl font-bold font-inter">Potencialize seus resultados na academia!</h1>
                    <p className="text-lg mt-4 mb-4">Aqui você acompanha sua progressão dia-a-dia nos treinos de forma prática!</p>
                    <Link to="/planilha" className="transition mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-900 duration-300">
                        Crie uma Planilha!
                    </Link>
                </div>
            </Container>    
        </>
    )
}

export default HomeSlide