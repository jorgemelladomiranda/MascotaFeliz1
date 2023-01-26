import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovider";
import Logo from "../../images/logo.png"
import { Login } from "../../screens/Login"

export const Header = () => {
    const value = useContext(Datacontext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const [openProfile, setOpenProfile]= useState(false)
    

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
        <div className="profile">
        {openProfile && <Login openModal={setOpenProfile} />}
        <span
          onClick={() => setOpenProfile(!openProfile)}
          style={{
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
          }}
        >
          <box-icon name="user-circle" color="#fffefe"></box-icon>
        </span>
      </div>
      </ul>
      <div className="cart" onClick={toogleMenu}>
      <box-icon name='cart-add' type='solid' color='#f5eeee' ></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};
