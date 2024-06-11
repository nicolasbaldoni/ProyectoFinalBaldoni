import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'


function CartItemDetail({producto}) {

    const { changeCantProdToCart } = useCart()
    const [precio, setPrecio] = useState(producto.prod.price * producto.cantProducto)

    return (
        <Card style={{ border: 'none' }}>
            <Row>
                <Col className='col-md-4'>
                <Card.Img variant='top' src={producto.prod.images[0]} style={{width: '180px', height: '100%' ,objectFit: 'cover' }}/>
                </Col>
                <Col className='col-md-8'>
                    <Card.Body>
                        <Card.Title className='text-start'>{producto.prod.name}</Card.Title>
                        <Row style={{marginTop: '5%'}}>
                            <Col><Form.Control id='cantProductoCart' type='number' defaultValue={producto.cantProducto} min='1' max={producto.prod.stock} onChange={() => setPrecio(producto.prod.price * document.getElementById('cantProductoCart').value)}/></Col>
                            <Col><Card.Text className='text-start' style={{ fontSize: '2rem', fontWeight: 'bold' }}>${precio}</Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default CartItemDetail