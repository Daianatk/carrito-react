import { useCartContext } from '../../context/CartContext'

const Cart = () => {
  const { cartList, vaciarCarrito, precioTotal } = useCartContext()
  console.log(cartList)
  return (
    <div>
      { cartList.map(prod => <div key={prod.id}>
                              <div className='w-50'>
                              <img src={prod.foto} alt='imagen referencial' className='w-25'/>
                              </div>
                              Nombre: {prod.name} - Categoria  {prod.categoria} - precio: {prod.price} - cantidad: {prod.cant}
                              </div>
                              )}
                              <h4>El precio total es: { precioTotal() }</h4>
                              <button className="btn btn-danger" onClick={ vaciarCarrito }> Vaciar Carrito </button>
    </div>
  )
}

export default Cart
