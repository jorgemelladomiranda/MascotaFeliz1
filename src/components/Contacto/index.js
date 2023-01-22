import React from 'react'

export const Contacto = () => {
  return (
    <div className="contenedor-formulario">
           <div><h3 className="text-white mt-4">CONTACTO</h3></div>
           <div><input type="text" placeholder="nombre" id="name" name="name" required></input></div>
           <div><input type="text" placeholder="apellido" id="apellido" name="apellido" required></input>
                <span id="apellido-error"></span></div>
           <div><input type="email" placeholder="Email" id="email" name="emailuser" required></input>
                <span id="emailuser-error"></span></div>
           <div><input type="number" placeholder="+56987654321" id="number" name="numero-de-telefono" required></input>
                <span id="number-error"></span></div>
           <div><div className="grupo-input">
           <div><label for="comentario">Comentario</label></div>
                    <textarea cols="30" rows="15" id="comentario" placeholder="este formulario no funciona, solo lo puse para que no quedara en blanco, no alcanze a crear un formulario con react"
                        name="comentario"></textarea>
            
                </div></div>
           <div><input className="enviar btn btn-danger mt-2 " type="submit" value="Enviar"></input></div>
           <div>                <button className="btn btn-dark mt-2" type="reset" id="reset" name="reset">Restablecer</button>
          </div>
    </div>

                
                
                
                
                
                
                
                
            
    
    
      
  )
}


