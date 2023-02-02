import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Header } from './Header/index';
import { Inicio } from "./Inicio/index";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { AlimentoGato } from "./AlimentoDeGatos/index";
import { Accesorio } from "./Accesorios/index";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import CartContainer from './CartContainer/index'

export const AppRouter = () => {
  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/alimentos" element={<ItemListContainer />} />
        <Route path="/alimentodegatos" element={<AlimentoGato />}/>
        <Route path="/accesorios" element={<Accesorio />}/>
        <Route path="/producto/:id" element={<ItemDetail />}/>
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
      
  </>
  )
}

