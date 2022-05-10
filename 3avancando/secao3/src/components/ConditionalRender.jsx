import {useState} from 'react'

function ConditionalRender() {
  const [x] = useState(true)
  const [nome, setnome] = useState('Adão')

  return ( 
    <div>
      <h1>Isso será exibido?</h1>
      {x && <h2>SIM</h2>}
      {!x && <h2>Não</h2>}
      {nome === 'João' ? (<h2>Sim</h2>) : (<h2>Não encontrado</h2>)}
      <button onClick={() => setnome('João')}>Mudar para João</button>
    </div>
   );
}

export default ConditionalRender;