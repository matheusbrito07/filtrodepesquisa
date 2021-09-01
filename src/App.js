import { useState } from 'react';
import './App.css';

const blusas = [
  {categoria:'tshirt', cor:'branca', tamanho:'M'},
  {categoria:'tshirt', cor:'preto', tamanho:'M'},
  {categoria:'casaco', cor:'branca', tamanho:'M'},
  {categoria:'casaco', cor:'preto', tamanho:'M'},
  {categoria:'regata', cor:'branca', tamanho:'M'},
  {categoria:'regata', cor:'preto', tamanho:'M'},
]

const linhas=(cat)=>{
  const li=[]
  blusas.forEach(
    (blusa)=>{
      if(blusa.categoria===cat||cat===''){
        li.push(
          <tr>
            <td>{blusa.categoria}</td>
            <td>{blusa.cor}</td>
            <td>{blusa.tamanho}</td>
          </tr>
        )
      }
    }
  )
  return li
}


const tabelaBlusas=(cat)=>{
  return(
    <table border='1'>
      <thead>
        <tr>
          <th>Categoria</th> 
          <th>Cor</th> 
          <th>Tamanho</th> 
           
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const pesquisaCategoria=(cat,scat)=>{
  return(
    <div>
      <label> Digite a categoria</label>
      <input type='text' value={cat} onChange={(e)=>scat(e.target.value)}/>
    </div>
  )
}



function App() {

  const [categoria, setCategoria]=useState('')
  return (
    <>
    {pesquisaCategoria(categoria,setCategoria)}
    <br/>
    {tabelaBlusas(categoria)}
    </>
  )
}

export default App;
