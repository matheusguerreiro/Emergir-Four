import { useContext } from "react"
import { ContadorContext } from "../context/ContadorContext"

const P2 = () => {
  const {contador, setContador} = useContext(ContadorContext) // sempre com {}, estamos desestruturando um objeto
  return (
    <div>
      <h2>P2</h2>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <p>O valor do Contador é: {contador}</p>
    </div>
  )
}

export default P2