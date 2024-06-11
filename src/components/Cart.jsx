import { useCart } from '../context/CartContext'
import CartItemDetail from './CartItemDetail'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Cart() {

    const { cart, getTotal } = useCart()

    return (

        <Container fluid style={{ padding: '7%' }}>
            <Col>
                {cart.map(prod => 
                    <Row key={prod.prod.id} >
                        <CartItemDetail producto= {prod}/>
                    </Row>
                )}
            </Col>
            <Col >
                <p style={{fontSize: '2rem'}}><b>Total a pagar: {getTotal()}</b></p>
                <Link style={{fontSize: '2rem'}} to='/checkout'>Finalizar compra</Link>
            </Col>
        </Container>

    )
}

export default Cart