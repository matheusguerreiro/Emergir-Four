import { useState } from 'react'

const HookUseState = () => {
  // 1.0
  const [name, setName] = useState('Fulano')
  // 2.0
  const [age, setAge] = useState(18)

  // 2.2
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(age)
    setAge(0)
  }

  return (
    <div>
      <h2>useState</h2>
      <hr />
      {/* 1.1 */}
      <h3>1</h3>
      <p>name: {name}</p>
      <button onClick={() => setName('Matheus Guerreiro')}>mudar name</button>
      <hr />
      {/* 2.1 */}
      <h3>2</h3>
      <form /* 2.3 */ onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>age: {age}</p>
        {/* 2.3 */}
        <button type="submit">enviar</button>
      </form>
      <hr />
    </div>
  )
}

export default HookUseState