import { getDocs, getFirestore, query, where,collection } from 'firebase/firestore';
import React, {useContext, useState,useEffect} from 'react'
import { Datacontext } from '../../context/Dataprovider';
import { Item } from '../Item/Item';

export const ItemListContainer  = () => {

  const value = useContext(Datacontext)

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        setIsLoading(true)
        const db = getFirestore()
        const queryCollection = collection (db, 'Productos')
    
        getDocs(queryCollection)
        .then(data => setProducts(data.docs.map(product => ({id:product.id, ...product.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))

    }, []);


  return (
    <>
    <h1 className='title'>Alimento de perros</h1>
    <div className='productos'>
    {isLoading && <h1 style={{textAlign:'center'}}>Cargando...</h1>}
        {
            products.filter(product => product.category === 'Alimento de perro').map(producto =>(
                <Item
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}
                    autor={producto.autor}
                    
                />
            ))
        }
    </div>
    </>
  );
};
