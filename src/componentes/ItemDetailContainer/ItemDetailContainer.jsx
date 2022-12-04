import './ItemDetailContainer.css';
import Intro from '../Intro/Intro';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
  const [ products, setProduct ] = useState({})
  const { idProducts } = useParams()

  useEffect(()=>{
    gFetch()
    .then(respProd => setProduct(respProd.find(prod => prod.id === idProducts)))
    .catch(err => (err))
  })

  return (
    <div className='card text-center m-5 p-5'>
      <div className="row">
        <div className="col">
          <img className='w-50' src={products.foto} alt="imagen de muestra" />
          <h3>Nombre: {products.name}</h3>
          <h3>Categoria: {products.categoria}</h3>
          <h3>Precio: {products.price}</h3>
        </div>
        <div className="col">
          <ItemCount />
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer;
