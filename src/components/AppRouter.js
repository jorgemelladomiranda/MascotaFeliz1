import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Header } from './Header/index';
import { Inicio } from "./Inicio/index";
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
import { AlimentoGato } from './AlimentoDeGatos/index'
import { Accesorio } from './Accesorios/index'
import { ItemDetail } from './ItemDetail/ItemDetail'

export const AppRouter = () => {
  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Alimentos" element={<ItemListContainer />} />
        <Route path="/AlimentoDeGatos" element={<AlimentoGato />}/>
        <Route path="/Accesorios" element={<Accesorio />}/>
        <Route path="/Producto/:id" element={<ItemDetail />}/>
      </Routes>
      
  </>
  )
}

