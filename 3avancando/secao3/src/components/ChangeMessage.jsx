function ChangeMessage({changeMsg}) {
  return ( 
    <div>
      <button onClick={() => changeMsg('Oi!')}>1</button>
      <button onClick={() => changeMsg('Olá!')}>2</button>
      <button onClick={() => changeMsg('Oilá!')}>3</button>
    </div>
   );
}

export default ChangeMessage;