import './App.css'
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  let n = 15
  let redTitle = true

  return (
    <div className='App'>

      {/* css global */}
      <h1>React com CSS</h1>
      <p>sou um p de App</p>

      {/* css de componente */}
      <MyComponent />

      {/* inline css */}
      <p style={{
        color: 'yellow',
        backgroundColor: 'darkgray'
      }}>estilo de forma inline</p>

      {/* inline dinâmico */}
      <p style={n < 10 ? ({color: 'white', backgroundColor: 'black'}) : ({color: 'yellow', backgroundColor: 'darkgreen'})}>estilo inline dinâmico</p>

      {/* classe dinâmica */}
      <h2 className={redTitle ? 'redTitle' : 'title'}>classe dinâmica</h2>

      {/* css modules */}
      <Title />
    </div>
  );
}

export default App;
