function UserDetails({id, nome, idade, sexo}) {
  return ( 
    <div>
      <h3>{nome}</h3>
      <ul>
        <li>id: {id}</li>
        <li>idade: {idade}</li>
        <li>sexo: {sexo}</li>
        <li>pode tirar carteira: {idade >= 18 ? 'Sim' : 'Não'}</li>
      </ul>
    </div>
   );
}

export default UserDetails;