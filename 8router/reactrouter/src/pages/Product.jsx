import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import {useFetch} from '../hooks/useFetch'

const Product = () => {
  // 4 - rota dinâmica, trazer id
  const {id} = useParams()

  // 5 - carregamento dado individual
  let url = 'http://localhost:3000/products/' + id
  const {data: product, loading, error} = useFetch(url)

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          {/* 6 - nested routes */}
          <NavLink to={`/products/${product.id}/info`}>Mais informações</NavLink>
        </div>
      )}
    </>
  )
}

export default Product