import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import Intro from '../Intro/Intro';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gFetch } from '../../helpers/gFetch';

const ItemListContainer = ({greeting}) => {
    const [ products, setProduct ] = useState([])
    const [ loading, setLoad ] = useState(true)

    const { id } = useParams()

    useEffect(()=>{
        if (id) {
        gFetch()
        .then(data => setProduct(data.filter(products => products.categoria === id)))
        .catch(err=> (err))
        .finally(()=> setLoad(false))
    } else {
        gFetch()
        .then(data => setProduct(data))
        .catch(err=> (err))
        .finally(()=> setLoad(false))
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
                            products.map( products => <div style={{ marginLeft: 100}}
                            className='col-md-3'
                            key={products.id}
                            >
                                <div className="card w-100 m-2 card text-center">
                                    <div className="card-header">
                                        {`${products.name} - ${products.categoria}`}
                                    </div>
                                    <div className="card-body">
                                        <img src={products.foto} alt="imagen-referencial" className="w-100" />
                                        {products.price}
                                    </div>
                                    <div className="card-footer">
                                        <Link to= {`/detalle/${products.id}`}>
                                            <button className='btn btn-warning btn-block'>
                                            + Detalle del producto
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                                
                                
                                )

                        }
                    </Col>
                </Row>
            </Container>

            <Link to="/contacto">Ir a contacto!</Link>
        </div>
    );
}

export default ItemListContainer;