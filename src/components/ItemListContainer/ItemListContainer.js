import React, {useContext} from 'react'
import { Datacontext } from '../../context/Dataprovider';
import { Item } from "../Item/Item";

export const ItemListContainer = () => {

    const value = useContext(Datacontext)
    const [productos] = value.productos
    const alimentoPerro = productos.filter(
        (producto) => producto.category === "Alimento de perro"
    );

    return (
        <>
        <h2 className='title'>Alimentos de perro</h2>
        <div className='productos'>
            {
                alimentoPerro.map(producto =>(
                    <Item
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                        marca={producto.marca}
                    />
                ))
            }
        </div>
        </>
    );
};
