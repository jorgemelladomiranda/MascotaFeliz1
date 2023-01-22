import React, {useContext, useEffect, useState} from 'react'
import { Datacontext } from "../../context/Dataprovider";
import { useParams } from 'react-router-dom'
import { Item } from "../Item/Item";

export const ItemDetail = () => {

    const value = useContext( Datacontext)
    const addCarrito = value.addCarrito;
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState([])
    const params = useParams();
    let item = 0;

    useEffect(() =>{
      productos.forEach(producto =>{
      
        if(producto.id === parseInt(params.id)){
          setDetalle(producto)
        }
      })
    }, [params.id, productos])

  return (
    <>
      {
        <div className='detalles'>
          <div className='detalle-left'> 
            <h2>{detalle.title}</h2>         
            <img src={detalle.image} alt={detalle.title} />
            
                <p className='price'>${detalle.price}</p>
                <div className='buttom'>
                    <button className='btn' onClick={() => addCarrito(detalle.id)}>
                    Añadir al carrito
                    </button>
                </div>
          </div>  
          <div className='detalle-rigth'>     
              <h2>"Nuestros productos son de la mejor calidad para tus mascotas"</h2>
                <p><b>Descripcion:</b> Todos los pedidos realizados entre el 25 y 31 de Diciembre se despacharán como máximo en 3 días hábiles.</p>
                <p><b>Nota:</b> Si no recibe el producto en el plazo de tres dias favor comunicarse en el boton de whatsapp, un ejecutivo se pondra en contacto a la brevedad</p>
          </div>
          
        </div>
        

        
      }
      
            <h2 className='relacionados'>Alimentos similares</h2>
            <div className='productos'>
              {productos.map((producto) =>{
                if((item < 4)&&(detalle.category === producto.category)){
                    item++;
                    return <Item
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        marca={producto.marca}
                        category={producto.category}
                      
                    />
                }
            })
          }
        </div>
    </>
  )
}

