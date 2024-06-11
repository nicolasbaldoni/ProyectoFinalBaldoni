import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/CartContext'


function ItemCount( {prod} ) {
    const { addToCart } = useCart()
    return (
        <Row>
             <Col><Form.Control id='cantProducto' type='number' defaultValue='1' min='1' max={prod.stock} /></Col>
             <Col xs={9}>{prod.stock === 0 ? <Button disabled variant='primary' style={{marginRight: '100%'}}><i className='fa fa-shopping-cart' aria-hidden='true'></i></Button> : <Button variant='primary' style={{marginRight: '100%'}} onClick={() => addToCart({prod, cantProducto: document.getElementById('cantProducto').value})} ><i className='fa fa-shopping-cart' aria-hidden='true'></i></Button>}</Col>
        </Row>
    )
}

export default ItemCount
