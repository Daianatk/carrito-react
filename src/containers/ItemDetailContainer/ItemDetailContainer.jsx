import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../helpers/gFetch';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [ products, setProduct ] = useState({})
  const { idProducts } = useParams()

  useEffect(()=>{
    gFetch()
    .then(respProd => setProduct(respProd.find(prod => prod.id === idProducts)))
    .catch(err => (err))
  })

  return (
    <ItemDetail products = {products} />
  )
}

export default ItemDetailContainer;
