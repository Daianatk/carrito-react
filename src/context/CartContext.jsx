import { createContext, useContext, useState } from "react";

const CartContext = createContext( [] )

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (producto) => {
        const idx = cartList.findIndex(prod => prod.id === producto.id)
        
        if (idx !== -1) {
            cartList[idx].cant +=  producto.cant
            setCartList( [ ...cartList ] ) 
        } else {
            setCartList([...cartList, producto])
        }

    }

    const precioTotal = () => cartList.reduce((contador, producto) => contador += (producto.price * producto.cant) , 0)
    
    // cantidad total
    const cantidadTotal = () => cartList.reduce((contador, producto) => contador += producto.cant , 0)


    // vaciar el carrito
    const vaciarCarrito = () => {
        setCartList([])
    }


    const eliminarPorItem = (id) =>  {
        setCartList( cartList.filter(prod => prod.id !== id ) )
    }


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarPorItem
        }}>
            { children }
        </CartContext.Provider>
    )
}