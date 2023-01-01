import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { gFetch } from '../../helpers/gFetch';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [ products, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)

  const { idProducts } = useParams()

  //useEffect(()=>{
    //gFetch()
    //.then(respProd => setProduct(respProd.find(prod => prod.id === idProducts)))
    //.catch(err => (err))
    //.finally(()=> setLoading(false))
  //})

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
