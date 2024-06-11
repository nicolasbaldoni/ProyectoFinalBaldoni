import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

function CarruselItemDetail(images) {
    let items = []
    for (let i = 0; i < images.images.length; i++) {
        items.push(
            <Carousel.Item key={i}>
                <Image src={images.images[i]} style={{ width: '100%', height: '100%' }} />
            </Carousel.Item>
        )

    }

    return (
        <Carousel>
            {items}
        </Carousel>
    )
}

export default CarruselItemDetail