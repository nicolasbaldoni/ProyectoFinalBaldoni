import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from 'firebase/firestore'
import { app } from './conexion'

const db = getFirestore(app)

export const getProductos = async () => {
    const productos = await getDocs(collection(db, 'productos'))
    productos.forEach((doc) => {
      console.log(doc.data())
    })
}

export const getProductosFromCategory = async (category) => {
    const q = category ? query(collection(db, 'productos'), where('category', '==', category)) : collection(db, 'productos')
    const querySnapshot = await getDocs(q)
    const prods = []

    querySnapshot.forEach((doc) => {
        prods.push({...doc.data(), id: doc.id})
    })

    return prods
}

export const getProducto = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnap =  await getDoc(docRef)
    let prod = null
    
    if (docSnap.exists()){
        prod = { ...docSnap.data(), id: docSnap.id }
    } else {
        console.log('No such document!')
        prod = false
    }

    return prod
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, 'orders'), order)
        console.log(docRef.id)
    } catch (e) {
        console.error('Error: ', e)
    }
}
