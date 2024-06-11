import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Item({ producto }) {
    return (
        <Col lg={4}>
            <Card style={{ width: '18rem' }} className='h-100'>
                <Card.Img variant='top' src={producto.images[0]} style={{width: '180px', height: '100%' ,objectFit: 'cover' }}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>
                        ${producto.price}
                    </Card.Text>
                    <Button as={Link} to={`/products/${producto.id}`} variant='primary'>Ver producto</Button>
                </Card.Body>
            </Card>
        </Col>
    )

}

export default Item