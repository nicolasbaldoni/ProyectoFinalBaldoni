import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartWidget = () => {

  const { cart, getAllProd } = useCart()

  return (
    <Nav.Link to='/cart' as={Link} className='position-relative'><i className='fa fa-shopping-cart' aria-hidden='true'></i><span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
      {getAllProd()}
    </span>
    </Nav.Link>
  )

}

export default CartWidget;