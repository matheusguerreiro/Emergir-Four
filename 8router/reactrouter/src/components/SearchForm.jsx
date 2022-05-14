import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchForm = () => {
  const navigate = useNavigate()
  const [busca, setBusca] = useState('')

  const lidarComSubmit = (e) => {
    e.preventDefault()

    navigate('/search?q=' + busca)
  }

  return (
    <form onSubmit={lidarComSubmit}>
      <label>
        <span>Busca:</span>
        <input type="text" onChange={(e) => setBusca(e.target.value)} placeholder='sua busca aqui...' />
        <input type="submit" value="Buscar" />
      </label>
    </form>
  )
}

export default SearchForm