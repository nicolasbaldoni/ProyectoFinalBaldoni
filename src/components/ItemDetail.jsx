import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarruselItemDetail from './CarruselItemDetail';
import ItemCount from './ItemCount';


function ItemDetail({ itemDetalle }) {
    return (
        <Card style={{ border: 'none' }}>
            <Row>
                <Col className='col-md-4'>
                    <CarruselItemDetail images={itemDetalle.images} />
                </Col>
                <Col className='col-md-8'>
                    <Card.Body>
                        <Card.Title className='text-start'>{itemDetalle.name}</Card.Title>
                        <Card.Text className='text-start'>
                            {itemDetalle.description}
                        </Card.Text>
                        <Card.Text className='text-start' >
                            <span style={{ fontWeight: 'bold' }}>Stock: </span>{itemDetalle.stock}
                        </Card.Text>
                        <Row style={{marginTop: '5%'}}>
                            <Col><ItemCount prod={itemDetalle}/></Col>
                            <Col><Card.Text className='text-start' style={{ fontSize: '2rem', fontWeight: 'bold' }}>${itemDetalle.price}</Card.Text></Col>
                        </Row>

                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ItemDetail;