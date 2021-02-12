import React, { useRef } from 'react';
import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router-dom'


import axios from 'axios'
import '../../App.css'

const Home = () => {

  const [getToken, setGetToken] = React.useState<any>()

  const email = useRef<HTMLInputElement>(null)
  const senha = useRef<HTMLInputElement>(null)

  const cadastrar = () => {

    const requisicao = {
      email: email.current?.value,
      password: senha.current?.value
    }

    axios.post('http://localhost:4000/users', requisicao)
      .then(resposta => localStorage.setItem("token", resposta.data.accessToken))

    const token = localStorage.getItem("token")
    setGetToken(token)
  }

  if(getToken){
    return (
      <>
        {
          getToken ?
          <Redirect to="/produtos" />
        :
          null
        }
      </>
    )
    
  } else{
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        
        <label>E-mail:</label><br/>
        <input type="email" placeholder='e-mail' ref={email} /> <br/>

        <label>Senha:</label><br/>
        <input type="password" placeholder='senha' ref={senha} /><br/><br/>
      
        <button onClick={cadastrar}>Cadastrar</button>
        <hr/>

      </div>
    )
  }
  
}

export default Home;