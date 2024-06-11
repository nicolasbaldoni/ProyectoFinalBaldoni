import { serverTimestamp } from 'firebase/database'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import { createOrder } from '../firebase/db'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'

function CheckoutForm() {

    const {cart, getTotal} = useCart()
    const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
   
    event.preventDefault()

    const [name, mail, phone] = event.target

    const order = {
        buyer: {
            name: name.value,
            email: mail.value,
            phone: phone.value
        },
        total: getTotal(),
        items: cart,
        date: serverTimestamp()
    }

    createOrder(order)

    
  }

    return (
        <Container style={{padding: '10%'}}> 
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                        
                    />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        
                    />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Telefono</Form.Label>
                    <InputGroup hasValidation>
                        
                        <Form.Control
                            type="phone"
                            placeholder="Telefono"
                            aria-describedby="inputGroupPrepend"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese su numero de telefono
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
        </Container>
    )
}

export default CheckoutForm