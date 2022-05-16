import { useContext } from "react"
import { ContadorContext } from "../context/ContadorContext"

// 5 - context mais complexo
import { useCorTituloContext } from "../hooks/useCorTituloContext"

const P1 = () => {
  const {contador, setContador} = useContext(ContadorContext) // atenção nas {} !

  // 5
  const {color, dispatch} = useCorTituloContext()

  // 6 - alterando state complexo
  const setCorTitulo = (color) => {
    dispatch({type: color})
  }
  
  return (
    <div>
      <h2 style={{color: color}}>P1</h2>
      {/* 3 - alterando o valor */}
      <button onClick={() => setContador(contador + 1)}>+</button>
      <p>O valor do Contador é: {contador}</p>
      {/* 6 */}
      <div>
        <button onClick={() => setCorTitulo('RED')}>Vermelho</button>
        <button onClick={() => setCorTitulo('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default P1