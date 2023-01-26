import React, { useContext } from "react";
import { Datacontext } from "../../context/Dataprovider";
import { Item } from "../Item/Item";

export const Accesorio = () => {
  const value = useContext(Datacontext);
  const [productos] = value.productos;
  const accesorio = productos.filter(
    producto => producto.category === "Accesorio"
  );

  return (
    <>
      <h1 className="title">Accesorios</h1>
      <div className="productos">
        {accesorio.map(producto => (
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
        ))}
      </div>
    </>
  );
};