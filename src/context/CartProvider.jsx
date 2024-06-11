import { useState } from 'react'
import { cartContext } from './CartContext'

function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addToCart = producto => {
        setCart([...cart, producto])
    }

    const getAllProd = () => {
        let count = 0
        cart.map( prod => {
            count = count + parseInt(prod.cantProducto)
        })
        return count
    }

    const getTotal = () => {
        const precio = cart.map(item => (item.prod.price * item.cantProducto))
        const total = precio.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <cartContext.Provider value = {{cart, addToCart, getAllProd, getTotal}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider