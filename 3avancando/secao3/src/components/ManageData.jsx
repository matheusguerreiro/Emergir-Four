import {useState} from 'react'

function ManageData() {
  const [number, setNumber] = useState(0)
  let someData = 10

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {someData = 15}}>Mudar Valor</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar</button>
      </div>
    </div>
  )
}

export default ManageData