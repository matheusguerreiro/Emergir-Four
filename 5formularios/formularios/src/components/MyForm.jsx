import './MyForm.css'
import {useState} from 'react'

function MyForm({user}) {
  /* 6 controlando inputs (inputs já vem preenchido) */
  /* 3 gerenciamento de dados (pegar valor do input) */
  const [name, setName] = useState(/* 6 */ user ? user.name : '')
  /* 4 alteração do state inline (pegar valor do input) */
  const [email, setEmail] = useState(/* 6 */ user ? user.email : '')
  /* 8 */
  const [desc, setDesc] = useState(/* 8 */ user ? user.desc : '')
  /* 9 */
  const [funcao, setFuncao] = useState(/* 9 */ user ? user.funcao : '')

  /* 3 */
  function handleName(event) {
    setName(event.target.value)
  }

  /* 3 */
  console.log(name)
  /* 4 */
  console.log(email)

  /* 5 enviar formulário */
  function handleSubmit(event) {
    event.preventDefault()
    console.log('Enviando o Formulário...')
    console.log(name, email, /* 8 */ desc, /* 9 */ funcao)

    // validação... envio... e etc...
    /* 7 resetando formulário */
    setName('')
    setEmail('')
    /* 8 */
    setDesc('')
    /* 9 */
    setFuncao('')
  }

  return ( 
    <div>
      {/* 1 criação */}
      <form /* 5 */ onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name='name' placeholder='seu nome' /* 3 */ onChange={handleName} /* 6 */ value={name}/>
        </div>
        {/* 2 label envolvendo o input */}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder='seu e-mail' /* 4 */ onChange={(event) => setEmail(event.target.value)} /* 6 */ value={email}/>
        </label>
        {/* 8 input textarea */}
        <label>
          <span>Descrição</span>
          <textarea name="desc" placeholder='descrição...' onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
        </label>
        {/* 8 -------------- */}
        {/* 9 select */}
        <label>
          <span>Função</span>
          <select name="funcao" onChange={(e) => setFuncao(e.target.value)} value={funcao}>
            <option value="usuario">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adm">Administrador</option>
          </select>
        </label>
        {/* 9 ------------------------------------ */}
        <input type="submit" value="enviar" />
      </form>
    </div>
   );
}

export default MyForm;