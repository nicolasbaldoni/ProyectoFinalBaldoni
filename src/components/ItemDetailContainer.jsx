import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '././ItemDetail'
import { Container } from 'react-bootstrap'
import { getProducto } from '../firebase/db'
import LoadingItemDetail from './loading/LoadingItemDetail'

function ItemDetailContainer() {

    const [detail, setDetail] = useState()
    const [loading, setLoading] = useState(true)
    const { idProd } = useParams()

    useEffect(() => {
        
        const getProdServer = async () => {
            const prod = await getProducto(idProd)
            setDetail(prod)
            setLoading(false)
        }

        getProdServer()

    }, [idProd])

    return (
        <Container style={{paddingTop: '7%'}}>
            {loading ? <LoadingItemDetail /> : <ItemDetail itemDetalle={detail} />}
        </Container>
    )

}

export default ItemDetailContainer