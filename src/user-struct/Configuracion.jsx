import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import General from "../user-struct/config-struct/General";
import Proyectos from "../user-struct/config-struct/Proyectos";
import Experiencia from "../user-struct/config-struct/Experiencia";
import Certificacion from "../user-struct/config-struct/Certificacion";
import Repositorios from "../user-struct/config-struct/Repositorios";
import Contac from "../user-struct/config-struct/Contac";

export default function div() {
  const [mostrarTextuser, setMostrarTextuser] = useState(false);

  return (
    <div className="flex justify-center items-center w-full h-[80%]">
      
      <div
        className="grid grid-cols-3 w-[50%] shadow-2xl rounded-2xl"
        style={{ gridTemplateColumns: "0.5fr 1fr 3fr" }}
      >
        <div className="flex items-start justify-center rounded-2xl p-6">
          <div
            onMouseEnter={() => setMostrarTextuser(true)}
            onMouseLeave={() => setMostrarTextuser(false)}
          >
            <FaUserAlt className="text-2xl" />
            <p
              className={`text-xs absolute rounded-lg p-1 bg-black text-white ${
                mostrarTextuser ? "opacity-100 animate-cloudIn" : "opacity-0"
              }`}
            >
              Usuario
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-6 p-4">
          <Link to="*" className="cursor-pointer">
            General
          </Link>
          <Link to="Proyectos" className="cursor-pointer">
            Proyectos
          </Link>
          <Link to="Experiencia" className="cursor-pointer">
            Experiencia laboral
          </Link>
          <Link to="Certificacion" className="cursor-pointer">
            Certificados
          </Link>
          <Link to="Repositorios" className="cursor-pointer">
            Repositorios
          </Link>
          <Link to="Contac" className="cursor-pointer">
            Contacto
          </Link>
          <Link to="/" className="cursor-pointer">cerrar</Link>
        </div>
        
          <Routes>
            <Route path="*" element={<General />} />
            <Route path="Proyectos" element={<Proyectos />} />
            <Route path="Experiencia" element={<Experiencia />} />
            <Route path="Certificacion" element={<Certificacion />} />
            <Route path="Repositorios" element={<Repositorios />} />
            <Route path="Contac" element={<Contac />} />
          </Routes>
          
        
      </div>
    </div>
  );
}
