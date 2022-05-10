import { useState } from 'react';
import city from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from "./components/ManageData";
import ShowUserName from './components/ShowUserName';

function App() {
  let name = 'Guerreiro'
  const [nome] = useState('Ferreira')
  
  return (
    <div>
      <h1>Meu App</h1>
      <hr />
      <ShowUserName name={name}/>
      <ConditionalRender />
      <ListRender />
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
