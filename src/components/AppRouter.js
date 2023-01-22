import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Header } from './Header/index';
import { Inicio } from "./Inicio/index";
import {ItemListContainer} from './ItemListContainer/ItemListContainer'
import {Recomendaciones} from './Recomendaciones/index'
import {Contacto} from './Contacto/index'
import {ItemDetail} from './ItemDetail/ItemDetail'

export const AppRouter = () => {
  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Alimentos" element={<ItemListContainer />} />
        <Route path="/Recomendaciones" element={<Recomendaciones />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        <Route path="/Producto/:id" element={<ItemDetail />}/>
      </Routes>
      
  </>
  )
}

