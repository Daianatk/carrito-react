import { Link } from "react-router-dom"

const CartFinal = ({ order }) => {
    const { id, buyer } = order
    const { name, email } = buyer

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h3>Su pedido pronto será enviado</h3>
      <div className='p-2'>
        <h5 className='text-break'>
          Datos del Pedido
        </h5>
        <p className='text-break'>
        Número de Pedido: <br />
        <span className='fw-semibold text-danger'>
        {id}
        </span>
        </p>
        <p className='text-break'>
        Nombre: <br />
        <span className='fw-semibold text-success'>
        {name}
        </span>
        </p>
        <p className='text-break'>
        Email: <br />
        <span className='fw-semibold text-success'>
        {email}
        </span>
        </p>
        <p className='text-white bg-dark'>
        Nos comunicaremos con usted a la brevedad.
        </p>
        </div>
        
        <Link to= '/'>Ir a Home</Link>
      </div>
    </div>
  </div>
  )
}

export default CartFinal

