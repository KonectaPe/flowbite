import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";
import { BsPersonFillLock } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Ayuda() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center justify-start h-[80%] w-[50%] shadow-2xl rounded-2xl pt-10 gap-6">
        <div className="relative">
          <p>¿En que podemos ayudarte?</p>
          <div className="absolute flex justify-end right-2 pt-3 pl-3">
            <BsSearch />
          </div>
          <input
            className="bg-[#f2f2f2] p-2 rounded-xl w-96"
            type="text"
            placeholder="Buscar..."
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="cursor-pointer">
          <BsPersonFillGear className="text-3xl" />
            <p className="text-lg">Configuracion de la cuenta</p>
            <p>Ajusta la configuracion,</p>
            <p>Administra las notificaciones</p>
          </div>

          <div className="cursor-pointer">
          <BsPersonFillLock className="text-3xl"/>
            <p className="text-lg">Privacidad y seguridad</p>
            <p>Protege tu cuenta</p>
            <p>Quien puede ver tu perfil</p>
            <p>Agrega proteccion adicional</p>
          </div>

          <div className="flex justify-end pb-2">
          <Link to="/" className="cursor-pointer">cerrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
