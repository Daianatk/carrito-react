import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"
import Checkout from '../Checkout/Checkout'
import { EmptyCart } from '../EmptyCart/EmptyCart'

const Cart = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } = useCartContext()

  return (
    <div>
      { cartList.length !== 0 ?
      <>
      { cartList.map(prod => <div key={prod.id}>
                              <div className='w-50'>
                              <img src={prod.foto} alt='imagen referencial' className='w-25'/>
                              </div>
                              Nombre: {prod.name} - Categoria  {prod.categoria} - precio: {prod.price} - cantidad: {prod.cant}
                              <button onClick={() => eliminarPorItem(prod.id) } className='btn btn-danger m-2'> x </button>
                              </div>
                              )}
                                <h4 className='p-2'>El precio total es: { precioTotal() }</h4>
                                <button className="btn btn-danger m-2" onClick={ vaciarCarrito }> Vaciar Carrito </button>
                                <Link to="/">
                                    <button type="button" className="btn btn-dark " style={{ height: "35px" }}>Seguir Comprando</button>
                                </Link>
                                <Checkout/>
      </>
      :
      <>
      <EmptyCart/>
      </>

      
}
    </div>
  )
}

export default Cart