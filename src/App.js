import React from "react";
import { AppRouter } from "./components/AppRouter";
import { DataProvider } from "./context/Dataprovider";
import "boxicons";
import { Carrito } from "./components/Carrito";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <DataProvider>
      <div className="App">
        <Carrito />
        <AppRouter />
      </div>
    </DataProvider>
    </BrowserRouter>
  );
}

export default App;
