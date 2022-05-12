import './StartScreen.css'

function StartScreen({startGame}) {
  return ( 
    <div className="ss">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar o Jogo.</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
   );
}

export default StartScreen;