// 4 - refatorando com hook
import { useContadorContext } from "../hooks/useContadorContexto"
import { useCorTituloContext } from "../hooks/useCorTituloContext"

const P3 = () => {
  const {contador, setContador} = useContadorContext()

  const {color, dispatch} = useCorTituloContext()
  const setCorTitulo = (color) => {
    dispatch({type: color})
  }
  return (
    <div>
      <h2 style={{color: color}}>P3</h2>
      <span>
        <button onClick={() => setCorTitulo('BLUE')}>Azul</button>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
      </span>
      <p>Usando e Alterando o ContadorContext via Hook: {contador}</p>
    </div>
  )
}

export default P3