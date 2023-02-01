import { Link } from "react-router-dom"

export const EmptyCart = () => {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h1>Su carrito está vacío</h1>
        <Link to= '/'>Ir a Home</Link>
      </div>
    </div>
  </div>
  )
}
