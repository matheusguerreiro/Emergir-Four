import './GameOver.css'

function GameOver({restartGame}) {
  return ( 
    <div className='go'>
      <h2>Game Over</h2>
      <button onClick={restartGame}>Reiniciar Jogo</button>
    </div>
   );
}

export default GameOver;