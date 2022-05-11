function ExecuteFunction({myFunction}) {
  return ( 
    <div>
      <p>Minha Função do componente Pai.</p>
      <button onClick={myFunction}>Clique para Executá-la!</button>
    </div>
   );
}

export default ExecuteFunction;