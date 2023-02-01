import { Link } from "react-router-dom"

const CartFinal = ({ order }) => {
    const { id } = order

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
      <div className='p-2 border h-100'>
                        <h5 className='text-break'>
                            Datos del Pedido
                        </h5>
                        <p className='text-break mb-0'>
                            Número de Pedido:
                            <span className='fw-semibold'>
                                {id}
                            </span>
                        </p>
                        </div>
        <Link to= '/'>Ir a Home</Link>
      </div>
    </div>
  </div>
  )
}

export default CartFinal

