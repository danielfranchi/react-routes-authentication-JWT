import React from 'react';
import axios from 'axios'
import { Helmet } from 'react-helmet'

const Produtos = () => {

  interface Produtos{
    description: string,
    id: number,
    image: string,
    price: string
    title: string
  }

  const [produtos, setProduto] = React.useState<Produtos[]>([])
  const token = localStorage.getItem("token")

  const headers = {
    'Authorization': `Bearer ${token}`
  }
  
  React.useEffect(() => {
    axios.get('http://localhost:4000/products', {headers: headers})
     .then(resposta => setProduto(resposta.data))
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Produtos</title>
      </Helmet>

      {produtos !== null && produtos.map((item:Produtos) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title}/>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <hr/>
        </div>
      ))} 
    </>
  );
}

export default Produtos;