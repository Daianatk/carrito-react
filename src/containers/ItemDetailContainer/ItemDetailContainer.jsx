import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [ products, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)

  const { idProducts } = useParams()

  useEffect(()=>{        
    const db = getFirestore()
    const queryDoc = doc(db, 'products',  idProducts)
    getDoc(queryDoc)
    .then(resp => setProduct( { id: resp.id,...resp.data()} ))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
}, [])  



  return (
    <>
    {loading ? <Loading /> : <ItemDetail products = {products} />}
    </>
  )
}

export default ItemDetailContainer;
