import { useState } from "react"

function PlanilhaForm() {

    const [treinoAtual, setTreinoAtual] = useState({
        treino_letter: "",
        exercicios: []
    })
    const [treinos, setTreinos] = useState([])
    const [exercicioAtual, setExercicioAtual] = useState("")
    const [series, setSeries] = useState("")
    const [reps, setReps] = useState("")

    function addTreino() {
        setTreinos([...treinos, treinoAtual])
    }

    function addExercicio(key) {
        let treinos_temp = treinos

        for( let i = 0 ; i < treinos.length ; i++ ) {
            if(treinos[i]["treino_letter"] === key && exercicioAtual.length !== 0
                && series.length !== 0 && reps.length !== 0
            ) {
                treinos_temp[i]["exercicios"] = [...treinos_temp[i]["exercicios"], {
                    exercicio: exercicioAtual,
                    series: series,
                    repeticoes: reps
                }]
                setTreinos(treinos_temp)
                console.log(treinos)
            }
        }

        console.log(treinos)
    }

    return(
        <div className="p-6 max-w-screen-lg mx-auto bg-gray-100 rounded-md shadow-lg mt-4 mb-4 font-inter">
            <h1 className="text-2xl font-bold text-center mb-6">Criar Planilha de Treino</h1>

            <div className="mb-6">
                <label className="block mb-2 text-lg font-medium">
                    Adicionar Treino (A, B, C...)
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 border rounded-md"
                        placeholder="Digite o nome do treino (ex: A)"
                        onChange={(e) =>
                            setTreinoAtual({
                                treino_letter: e.target.value.toUpperCase(),
                                exercicios: [],
                            })
                        }
                    />
                    <button
                        onClick={addTreino}
                        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 w-full sm:w-auto"
                    >
                        Adicionar Treino
                    </button>
                </div>
            </div>

            {treinos.map((treino) => (
                <div key={treino.id} className="mb-6 border p-4 rounded-md bg-white">
                    <h2 className="text-xl font-bold mb-4">Treino {treino.treino_letter}</h2>

                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Adicionar Exercício:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                className="p-2 border rounded-md"
                                placeholder="Nome do exercício"
                                onChange={(e) => setExercicioAtual(e.target.value)}
                            />
                            <input
                                type="number"
                                className="p-2 border rounded-md"
                                placeholder="Séries"
                                onChange={(e) => setSeries(e.target.value)}
                            />
                            <input
                                type="number"
                                className="p-2 border rounded-md"
                                placeholder="Repetições"
                                onChange={(e) => setReps(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={() => {
                                addExercicio(treino.treino_letter);
                                setExercicioAtual("");
                            }}
                            className="mt-4 px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 w-full sm:w-auto"
                        >
                            Adicionar Exercício
                        </button>
                    </div>

                    <h3 className="text-lg font-medium mb-2">Exercícios:</h3>
                    <ul className="list-disc ml-4">
                        {treino.exercicios.map((exercicio, index) => (
                            <li key={index}>
                                <p>
                                    {exercicio.exercicio} - {exercicio.series} Séries -{" "}
                                    {exercicio.repeticoes} Repetições
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 mt-6">
                Salvar Planilha
            </button>
        </div>
    )
}

export default PlanilhaForm