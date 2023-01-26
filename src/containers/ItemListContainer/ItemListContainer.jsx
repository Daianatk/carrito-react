import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import Intro from '../../components/Intro/Intro';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [ products, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)


    const { id } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'products')


        if (id) {

            const queryFiltrada =  query(queryCollection, where('categoria','==', id))

            getDocs(queryFiltrada)
            .then(data => setProduct( data.docs.map(products => ({ id: products.id,...products.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
           
            getDocs(queryCollection)
            .then(data => setProduct( data.docs.map(products => ({ id: products.id,...products.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))   
        }      
   

    }, [id])


    return(
        <div className="home">
            <Intro titulo="Tienda Libre" />
            <Container>
                <h1 className='texto-home'>{greeting}</h1>
                <h2>Productos Principales</h2>
                <Row>
                    <Col className='products'>
                        { loading ?
                            <p>Loading...</p>
                            :
                            <ItemList products = { products } />

                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemListContainer;