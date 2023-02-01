import { useCartContext } from '../../context/CartContext'
import { useState, useEffect } from 'react'
import { CartFinal } from '../CartFinal/CartFinal'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Navigate } from "react-router-dom";

const Checkout = () => {
  
  const [ dataForm, setFromData ] = useState({
    name: '',
    email: '',
    emailConfirm: '',
    phone: ''
  })

  const [errorForm, setErrorForm] = useState({ 
    name: '', 
    email: '', 
    emailConfirm: '', 
    phone: '' })
  const navigate = useNavigate()

  const { cartList, vaciarCarrito, precioTotal } = useCartContext()

  const addOrder = (e) => {
    e.preventDefault()

    if (Object.keys(errorForm).length === 0) {
      const user = {
        name: `${dataForm.name}`,
        phone: dataForm.phone,
        email: dataForm.email
    }


    const order = {}
    order.buyer = dataForm
    order.price = precioTotal()
    order.items = cartList.map(({id, price, name}) => ({id, price, name}))

    const db =  getFirestore()
    const queryCollection = collection(db, 'orders')
    console.log(dataForm)

    addDoc(queryCollection, order)
    .then(resp => { navigate(`/cartfinal/${resp.id}`) })
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())
          }
  }

  const handleOnChange = (e) => {
    setFromData({
      ... dataForm,
      [e. target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    const regexTel = /^\d{9}$/
    let error = {}

    if (!dataForm.name.trim()) {
        error.name = 'Se requiere un Nombre'
    }

    if (!dataForm.name.trim()) {
        error.name = 'Se requiere un Nombre y Apellido'
    }

    if (!dataForm.name.trim() && !dataForm.name.trim()) {
        error.nombre = 'Se requiere Nombre y Apellido'
    }

    if (!dataForm.email.trim()) {
        error.email = 'Se requiere un Email'
    }

    if (dataForm.email.trim() && !regexEmail.test(dataForm.email.trim())) {
        error.email = 'Email no valido, verifique'
    }

    if (!dataForm.emailConfirm.trim()) {
        error.emailConfirm = 'Se requiere confirmar email'
    }

    if (dataForm.emailConfirm.trim() && !regexEmail.test(dataForm.emailConfirm.trim())) {
        error.emailConfirm = 'Email no valido, verifique'
    }

    if (dataForm.emailConfirm.trim() && dataForm.email.trim() && dataForm.emailConfirm.trim() !== dataForm.email.trim()) {
        error.emailConfirm = 'Los email no son iguales, verifique'
    }

    if (!dataForm.phone.trim()) {
        error.phone = 'Se requiere un telefono'
    }

    if (dataForm.phone.trim() && !regexTel.test(dataForm.phone.trim())) {
        error.phone = 'El numero debe tener 9 dígitos'
    }

    setErrorForm(error)
}

useEffect(() => {
  validateForm()
}, [dataForm])
  

  return (
    <div>
          <hr />
                <div className="row g-3">
                  <form className="m-3 needs-validation" onSubmit={addOrder}>
                    <h5>Completa el formulario para finalizar tu compra.</h5>
                      <div className="col-md-4">
                        <label htmlFor="validationCustom01" className="form-label">Tu nombre</label>
                        <input type="text" className="form-control" id="validationCustom01" onChange={handleOnChange} name='name' value={dataForm.name} required />
                        {errorForm.name && <sup className='ps-2'>{errorForm.name}</sup>}
                          <div className="valid-feedback">
                            ¡Se ve bien!
                          </div>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="validationCustom02" className="form-label">Tu número de celular</label>
                        <input type="number" className="form-control" id="validationCustom02" onChange={handleOnChange} name='phone' value={dataForm.phone} required />
                        {errorForm.phone && <sup className='ps-2'>{errorForm.phone}</sup>}
                          <div className="valid-feedback">
                            ¡Se ve bien!
                          </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Tu email</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@midominio.com" onChange={handleOnChange} name='email' value={dataForm.email} required />
                          {errorForm.email && <sup className='ps-2'>{errorForm.email}</sup>}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Confirme tu email</label>
                           <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@midominio.com" onChange={handleOnChange} name='emailConfirm' value={dataForm.emailConfirm} required />
                           {errorForm.emailConfirm && <sup className='ps-2'>{errorForm.emailConfirm}</sup>}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                            Aceptas los términos y condiciones
                            </label>
                            <div className="invalid-feedback">
                            Debe estar de acuerdo antes de enviar el formulario.
                            </div>
                        </div>
                      </div>
                      <div className="col-md-4 m-4">
                          <button className="btn btn-primary" required>Enviar Formulario</button>
                      </div>
                    </form>
                  </div>
    </div>
  )
}

export default Checkout