import MyForm from './components/MyForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulários</h1>
      <MyForm user={{name: 'Matheus', email: 'm@gmail.com', desc: 'sou desenvolvedor', funcao: 'adm'}}/>
    </div>
  );
}

export default App;
