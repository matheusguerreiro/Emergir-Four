function Events() {
  function handleMeuEvento(event) {
    console.log('Clicou!', event)
  }

  function renderAlgumaCoisa(x) {
    if (x) {
      return <p>Alguma coisa!</p>
    } else {
      return <p>Outra coisa!</p>
    }
  }
  
  return ( 
    <div>
      <div>
        <h3>Eventos 1</h3>
        <button onClick={handleMeuEvento}>Clique</button>
      </div>
      <div>
        <h3>Eventos 2</h3>
        <button onClick={() => {console.log('Aqui!')}}>Clique</button>
      </div>
      <div>
        <h3>Eventos 3</h3>
        {renderAlgumaCoisa(true)}
        {renderAlgumaCoisa(false)}
      </div>
    </div>
   );
}

export default Events;