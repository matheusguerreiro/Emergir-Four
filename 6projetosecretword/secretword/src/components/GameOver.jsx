import './GameOver.css'

function GameOver({restartGame, score}) {
  return ( 
    <div className='go'>
      <h1>Fim de Jogo</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={restartGame}>Reiniciar Jogo</button>
    </div>
   );
}

export default GameOver;