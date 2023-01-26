import { useCartContext } from '../../context/CartContext'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
  const [ dataForm, setFromData ] = useState({
    name: '',
    email: '',
    emailConfirm: '',
    phone: ''
  })
  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } = useCartContext()

  const addOrder = (e) => {
    e.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.price = precioTotal()
    order.items = cartList.map(({id, price, name}) => ({id, price, name }))

    const db =  getFirestore()
    const queryCollection = collection(db, 'orders')

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())
  }

  const handleOnChange = (e) => {
    setFromData({
      ... dataForm,
      [e. target.name]: e.target.value
    })
  }

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
                              <form onSubmit={addOrder} class="row g-3 p-4 mb-5">
                                <div class="col-auto p-2">
                                <h5 className='text-center'>Completa el formulario para finalizar tu compra.</h5>
                                <input type="text" onChange={handleOnChange} name='name' value={dataForm.name} placeholder='Ingrese su nombre' />
                                <input type="text" onChange={handleOnChange} name='phone' value={dataForm.phone} placeholder='Ingrese su n° celular' />
                                <input type="text" onChange={handleOnChange} name='email' value={dataForm.email} placeholder='Ingrese su email' />
                                <input type="text" onChange={handleOnChange} name='emailConfirm' value={dataForm.emailConfirm} placeholder='Confirme su email' />
                                <button className="btn btn-success"> Realizar Pedido </button>
                                </div>
                              </form>
                              <h4 className='p-2'>El precio total es: { precioTotal() }</h4>
                              <button className="btn btn-danger m-2" onClick={ vaciarCarrito }> Vaciar Carrito </button>
      </>
      :
      <>
       <h2>El carrito esta vacio. Gracias por preferirno.</h2>
       <Link to= '/'>Ir a Home</Link>
      </>
      
}
    </div>
  )
}

export default Cart