import Item from './Item'

function ItemList({productos}) {
    return (
        <>
        {productos.map(producto =>(
            <Item producto = {producto} key={producto.id}/>
        ))}
        </>
    );
}

export default ItemList;