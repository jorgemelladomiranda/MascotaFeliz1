import React, { useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./components/Carrito";
import "boxicons";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  // const [closeModal, setCloseModal] = useState(false)

  async function getRol(uid) {
    return uid
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then(rol => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    });
  }

  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
        <Carrito />
        <AppRouter />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;