import React from 'react'

function Challenge() {
  let n1 = 5
  let n2 = 2
  
  function soma() {
    return console.log(`A Soma é: ${n1 + n2} !!`)
  }

  return (
    <div>
      <h2>Segundo Desafio</h2>
      <span style={{
        display: 'flex',
        width: '140px',
        justifyContent: 'space-between'
      }}><p>n1 = <strong>{n1}</strong></p><p>n2 = <strong>{n2}</strong></p></span>
      <button onClick={soma}>Somar ns</button>
    </div>
  )
}

export default Challenge