// npm i json-server

import './App.css'

import {useState, useEffect} from 'react'

// 4 2 -------------------------------------------
import { useFetch } from './hooks/useFetch'
// 4 2 ------------------------------------------

// url
const url = 'http://localhost:3000/products'

function App() {
  // 1 resgatando dados GET -------------------------------
  const [products, setProducts] = useState([])

  // 4 3
  const {data: items, /* 5 4 */ httpConfig, /* 6 3 */ loading, /* 7 3 */ error} = useFetch(url)

  /* useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }
    fetchData()
  }, [])
  console.log(products) */
  // 1 ----------------------------------------------

  // 2 adicionando dados POST -----------------------
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    // const product = {
    //   name: {name},
    //   price: {price}
    // } OU
    const product = {
      name, price
    }
    console.log(product)

    /* const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    // 3 carregamento dinâmico ---------------------------------------
    const addedProduct = await response.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])
    // 3 ------------------------------------------------------------------- */

    // 5 4 -------------------------------
    httpConfig(product, 'POST')
    // 5 4 ---------------------------

    // resetando os values após o envio
    setName('')
    setPrice('')
  }
  // 2 ----------------------------------------------

  // desafio
  function handleRemove(id) {
    httpConfig(id, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 4 ------------------------------------ */}
      {loading && <p>Carregando dados...</p>}
      {/* 6 4 ------------------------------------------ */}

      {/* 7 4 --------------------------------------------------- */}
      {error && <p>{error}</p>}
      {/* 7 4 --------------------------------------- */}

      {/* 1 ------------------------------------------------------ 1 */}
      {/* 6 4 --------------------------------------------------- */}
      <ul>
        { /* products */ /* 4 4 */ items && items.map((p) => (
          <li key={p.id}>
            {p.name} - R${p.price}
            <button onClick={() => handleRemove(p.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      {/* 6 4 --------------------------------------------------------- */}
      {/* 1 -------------------------------------------------- 1 */}

      {/* 2 ------------------------------------------------ 2 */}
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Produto:
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço de Produto:
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 6 5 state de loading no post -------------------------------------- */}
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Enviar" />}
          {/* 6 5 ----------------------------------------------------------------- */}
        </form>
      </div>
      {/* 2 ----------------------------------------------- 2 */}
    </div>
  );
}

export default App;
