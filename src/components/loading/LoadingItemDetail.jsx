import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'


function LoadingItemDetail() {
    return (
        <Card style={{ border: 'none' }}>
            <Row>
                <Col className='col-md-4'>
                <Placeholder animation='glow'>
                    <Placeholder xs={6} style={{ width: '200px', height: '100px' }} />
                    </Placeholder>
                </Col>
                <Col className='col-md-8'>
                    <Card.Body>
                    <Placeholder as={Card.Title} animation='glow'>
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation='glow'>
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation='glow'>
                            <Placeholder xs={6} />
                        </Placeholder>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default LoadingItemDetail