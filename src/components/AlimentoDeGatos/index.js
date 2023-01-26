import React, { useContext } from "react";
import { Datacontext } from "../../context/Dataprovider";
import { Item } from "../Item/Item";

export const AlimentoGato = () => {
  const value = useContext(Datacontext);
  const [productos] = value.productos;
  const alimentoGato = productos.filter(
    (producto) => producto.category === "Alimento de gato"
  );

  return (
    <>
      <h1 className="title">Alimento de Gato</h1>
      <div className="productos">
        {alimentoGato.map((producto) => (
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
