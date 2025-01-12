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
        <div class="p-6 max-w-4xl mx-auto bg-gray-100 rounded-md shadow-lg mt-4 font-inter">
            <h1 class="text-2xl font-bold text-center mb-6">Criar Planilha de Treino</h1>

            <div class="mb-6">
                <label class="block mb-2 text-lg font-medium">Adicionar Treino (A, B, C...)</label>
                <div class="flex gap-4">
                <input
                    type="text"
                    class="flex-1 px-4 py-2 border rounded-md"
                    placeholder="Digite o nome do treino (ex: A)"
                    onChange={(e) => {
                        setTreinoAtual({
                            treino_letter: e.target.value.toUpperCase(),
                            exercicios: []
                        })
                    }}
                />
                <button onClick={addTreino} class="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
                    Adicionar Treino
                </button>
                </div>
            </div>
            {
                treinos.map( (treino) => {
                    return <div key={treino.id} class="mb-6 border p-4 rounded-md bg-white">
                        <h2 class="text-xl font-bold mb-4">Treino {treino.treino_letter}</h2>

                        <div class="mb-4">
                        <h3 class="text-lg font-medium mb-2">Adicionar Exercício:</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                            type="text"
                            class="p-2 border rounded-md"
                            placeholder="Nome do exercício"
                            onChange={(e) => {setExercicioAtual(e.target.value)}}
                            />
                            <input
                            type="number"
                            class="p-2 border rounded-md"
                            placeholder="Séries"
                            onChange={(e) => {setSeries(e.target.value)}}
                            />
                            <input
                            type="number"
                            class="p-2 border rounded-md"
                            placeholder="Repetições"
                            onChange={(e) => {setReps(e.target.value)}}
                            />
                        </div>
                        <button onClick={() => {
                            addExercicio(treino.treino_letter)
                            setExercicioAtual("")
                        }
                        } class="mt-4 px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700">
                            Adicionar Exercício
                        </button>
                        </div>
                        
                        <h3 class="text-lg font-medium mb-2">Exercícios:</h3>
                        <ul class="list-disc ml-4">
                        {
                            treino.exercicios.map( (exercicio) => {
                                return <li key={exercicio.id} class="">
                                        <p>{exercicio.exercicio} - {exercicio.series} Séries - {exercicio.repeticoes} Repetições
                                        </p>
                                    </li>
                            } )
                        }
                        </ul>
                    </div>
                } )
            }

            <button class="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 mt-6">
                Salvar Planilha
            </button>
        </div>
    )
}

export default PlanilhaForm