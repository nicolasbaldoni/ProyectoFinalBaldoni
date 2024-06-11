import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'

function ProductosLoading() {

    let loop = []

    for (let i = 0; i < 6; i++) {
        loop.push(
            <Col lg={4} key={i}>
                <Card style={{ width: '18rem' }} className='h-100'>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation='glow'>
                            <Placeholder xs={6} style={{ width: '180px', height: '100px' }} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation='glow'>
                            <Placeholder xs={7} /><Placeholder xs={7} />
                        </Placeholder>
                        <Placeholder.Button variant='primary' xs={6} />
                    </Card.Body>
                </Card>
            </Col>)

    }
    return (
        <>
            {loop}
        </>
    )
}

export default ProductosLoading