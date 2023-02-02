import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovider";
import Logo from "../../images/logo.png"


export const Header = () => {
    const value = useContext(Datacontext);

    const {menu,setMenu, carrito} = useContext(Datacontext);
    

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <Link to="/">
        <div >
          <img className="logo" src={Logo} alt="" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="Alimentos">ALIMENTO PERRO</Link>
        </li>
        <li>
          <Link to="AlimentoDeGatos">ALIMENTO GATO</Link>
        </li>
        <li>
          <Link to="Accesorios">ACCESORIOS</Link>
        </li>
        
      </ul>
      <div className="cart" onClick={toogleMenu}>
      <box-icon name='cart-add' type='solid' color='#f5eeee' ></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};
