import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({products}) => {
  const [isCant, setIsCant ] = useState(false)

  const {  agregarCarrito} = useCartContext()

  const onAdd = (cant) => {
      agregarCarrito( { ...products, cant } )
      setIsCant(true)
  }

  return (
    <div className='card text-center m-5 p-5'>
      <div className="row">
        <div className="col">
          <img className='w-50' src={products.foto} alt="imagen de muestra" />
          <h3>Nombre: {products.name}</h3>
          <h3>Categoria: {products.categoria}</h3>
          <h3>Precio: {products.price}</h3>
          <h3>Stock: {products.stock}</h3>
        </div>
        <div className="col">
        {isCant ?
                    
                    <>
                        <Link to="/cart">
                            <button className='btn btn-outline-primary'>Ver el Carrito</button>

                        </Link>
                        <Link to="/">
                            <button className='btn btn-outline-success'>Continuar Comprando </button>
                        </Link>
                    </>
                
                :

          <ItemCount 
                stock={products.stock} 
                initial={1} 
                onAdd={onAdd}
          />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
