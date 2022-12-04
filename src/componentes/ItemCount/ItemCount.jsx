import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {

  const [ count, setCount ] = useState(0)

  const handleContadorSuma = () =>{
    setCount ( count + 1 )
  }

  const handleContadorResta = () =>{
    setCount ( count - 1 )
  }

  return (
    <section className='card text-center m-5'>
      <p className="alert alert-light">{ count }</p>
      <button className='btn btn-info' onClick={ handleContadorSuma }> + </button>
      <button className='btn btn-warning' onClick={ handleContadorResta }> - </button>
    </section>
  )
}

export default ItemCount
