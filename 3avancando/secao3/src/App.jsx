import { useState } from 'react';
import city from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ChangeMessage from './components/ChangeMessage';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from "./components/ManageData";
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  let name = 'Guerreiro'
  // const [nome] = useState('Ferreira')

  const cars = [
    {id: 0, brand: 'VW', km: 23448, color: 'black'},
    {id: 1, brand: 'Chevrolet', km: 111998, color: 'white'},
    {id: 2, brand: 'KIA', km: 98322, color: 'green'}
  ]

  const pessoas = [
    {id: 0, nome: 'Matheus', idade: 31, sexo: 'M'},
    {id: 1, nome: 'Ellen', idade: 36, sexo: 'F'},
    {id: 2, nome: 'Ellena', idade: 5, sexo: 'F'},
    {id: 3, nome: 'Heitor', idade: 8, sexo: 'M'},
    {id: 4, nome: 'Jesus', idade: 33, sexo: 'M'}
  ]
  
  function showMessage() {
    console.log('Executei!')
  }

  const [message, setMessage] = useState('')

  function handleMessage(msg) {
    return setMessage(msg)
  }

  return (
    <div>
      <h1>Meu App</h1>
      <hr />
      <hr />
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} id={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} sexo={pessoa.sexo}/>
      ))}
      {/* state lift */}
      <ChangeMessage changeMsg={handleMessage}/>
      <Message msg={message}/>
      <hr />
      {/* função como prop */}
      <ExecuteFunction myFunction={showMessage}/>
      <hr />
      {/* prop children */}
      <Container prop='sou uma prop de Container'>
        <p>sou um p filho do componente Container</p>
        <p>sou outro filho do componente Container</p>
      </Container>
      <hr />
      {/* fragments */}
      <Fragment teste='sou uma prop de Fragment'/>
      <hr />
      {/* renderização de arrays com componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
      ))}
      <hr />
      {/* reaproveitamento de componentes */}
      <CarDetails brand='Ferrari' km={100} color='red'/>
      <CarDetails brand='Ford' km={1233} color='darkblue'/>
      <hr />
      {/* destructuring em props */}
      <CarDetails brand='Chevy' km={0} color='darkred'/>
      <hr />
      {/* props */}
      <ShowUserName name={name}/>
      <hr />
      {/* condicional ternário */}
      <ConditionalRender />
      <hr />
      {/* renderizar array */}
      <ListRender />
      <hr />
      {/* useState */}
      <ManageData />
      {/* imagem em public */}
      <div>
        <img src="/img1.jpg" alt="imagem 1 em public" />
      </div>
      {/* imagem em asset ou imgs */}
      <div>
        <img src={city} alt="imagem 2 em assets" />
      </div>
    </div>
  );
}

export default App;
