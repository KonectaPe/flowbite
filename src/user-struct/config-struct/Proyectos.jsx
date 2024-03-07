import React from "react";
import div from "../Configuracion";

export default function Proyectos() {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full pr-16 pl-5 gap-3">
      <div>
        <p className="text-xl">Proyectos</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p>Titulo</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>

        <div>
          <p>Año</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>

        <div>
          <p>Empresa o cliente</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>

        <div>
          <p>Enlance del proyecto</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>
      </div>

      <div className="flex flex-col w-full justify-start">
      <p>Colaboradores</p>
      <input className="bg-[#f2f2f2] p-1 rounded-xl text-black" type="text" />
      </div>
    </div>
  );
}
