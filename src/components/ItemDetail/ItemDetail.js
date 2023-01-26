import React, {useContext, useEffect, useState} from 'react'
import { Datacontext } from "../../context/Dataprovider";
import { useParams } from 'react-router-dom'
import { Item } from "../Item/Item";

export const ItemDetail = () => {

    const value = useContext( Datacontext)
    const [dataProducto, setDataProducto]= useState({})
    const [productos] = value.productos;
    const [carrito, setCarrito] = value.carrito;
    const [detalle, setDetalle] = useState([])
    const [counterProduct, setCounterProduct] = useState(0);
    const params = useParams();
    let item = 0;

    const handleAddCantidad = () => {
      setCounterProduct(counterProduct + 1);
    };
  
    const handleSubtractCantidad = () => {
      if (counterProduct > 0) {
        setCounterProduct(counterProduct - 1);
      }
    };

    const addProducto = () => {
      const newProducto = {
        ...dataProducto,
        id: Math.random().toString(12),
        cantidad: counterProduct < 1 ? 1 : counterProduct
      }
      
  
      setCarrito([...carrito, newProducto]);

      console.log(
        carrito
      )
      setCounterProduct(0);
    };


    useEffect(() =>{
      productos.forEach(producto =>{
      
        if(producto.id === parseInt(params.id)){
          setDetalle(producto)
          setDataProducto(producto)
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
                <button onClick={handleAddCantidad}>
            <box-icon name="up-arrow" type="solid"></box-icon>
          </button>
          <input
            style={{
              padding: 8,
              width: "30px",
              textAlign: "center",
              border: "none",
              outline: "none"
            }}
            type="number"
            value={counterProduct}
            onChange={handleAddCantidad}
          />
          <button onClick={handleSubtractCantidad}>
            <box-icon name="down-arrow" type="solid"></box-icon>
          </button>
         
          <div className="bottom">
          <button className="btn" onClick={() => addProducto()}>
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
                if(item < 4 && detalle.category === producto.category){
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

