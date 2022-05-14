import { NavLink } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import './Home.css'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'
  const {data: items, loading, error} = useFetch(url)
  return (
    <div className='h'>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>R${item.price}</p>
            {/* rota dinâmica */}
            <NavLink to={`/products/${item.id}`}>Detalhes</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home