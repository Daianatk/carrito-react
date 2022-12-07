import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {

  const [ count, setCount ] = useState(0)

  const handleContadorSuma = () =>{
    if ( count < stock ) {
    setCount ( count + 1 )
    }
  }

  const handleContadorResta = () =>{
    if ( count > initial ) {
      setCount ( count - 1 )
    }
  }

  return (
    <div className='card m-5'>
      <div className='card-header'>
        <label htmlFor="">{count}</label>
      </div>
      <div className="card-body">
        <button className='btn btn-info' onClick={ handleContadorSuma }> + </button>
        <button className='btn btn-warning' onClick={ handleContadorResta }> - </button>
      </div>
      <div className="card-footer">
        <button className='btn btn-outline-success btn-block' onClick={ onAdd(count) }>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
