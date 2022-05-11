function Container({children, prop}) {
  return ( 
    <div style={{
      backgroundColor: 'darkgray',
      color: 'white',
      height: 'auto',
      textAlign: 'center'
    }}>
      <h3>Container</h3>
      <hr />
      {children}
      <p>{prop}</p>
    </div>
   );
}

export default Container;