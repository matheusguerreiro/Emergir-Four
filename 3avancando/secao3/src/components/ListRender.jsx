import React from 'react'
import { useState } from 'react'


const ListRender = () => {
  const [list] = useState(['Matheus', 'Ellen', 'Ellena'])
  const [list2] = useState([{id: 0, name: 'Matheus', idade: 30}, {id: 1, name: 'Ellen', idade: 36}, {id: 2, name: 'Ellena', idade: 5}])
  const [users, setUsers] = useState([{id: 0, name: 'Adão'}, {id: 1, name: 'Damales'}, {id: 2, name: 'Bastuit'}, {id: 3, name: 'Jaisor'}, {id: 4, name: 'Marques'}])
  
  function deleteRandom() {
    const randomNumber = Math.floor(Math.random() * 5)

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {/* não é bom usar o i(index do array) como key, e sim o id de cada objeto */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {list2.map((item) => (
          <li key={item.id}>{item.name}, {item.idade}</li>
        ))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar Usuário</button>
    </div>
  )
}

export default ListRender