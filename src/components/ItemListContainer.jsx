import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import { getProductos, getProductosFromCategory } from '../firebase/db'
import ProductosLoading  from './loading/Loading'

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const getProductosServer = async () => {
            const products = await getProductosFromCategory(id)
            setItems(products)
            setLoading(false)
        }

        getProductosServer()
        
    }, [id])


    return (
        <Container fluid style={{padding: '7%'}}>
            <Row xs={1} md={2} className="g-4">
                {loading ? <ProductosLoading /> : <ItemList productos={items} />}                
            </Row>
        </Container>
    )


}

export default ItemListContainer;