import React from "react";

export default function Experiencia() {
  return (
    <div className="flex flex-col items-start w-full pr-16 pl-5 gap-3">
      <div>
        <p className="text-xl">Experiencia Laboral</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p>De*</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="date" />
        </div>

        <div>
          <p>Hasta*</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="date" />
        </div>

        <div>
          <p>Puesto</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>

        <div>
          <p>Empresa</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>

        <div>
          <p>Lugar</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>

        <div>
          <p>Url</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="text" />
        </div>
      </div>

      <div className="flex flex-col w-full justify-start">
        <p>Compañeros</p>
        <input className="bg-[#f2f2f2] p-1 rounded-xl text-black" type="text" />
      </div>
    </div>
  );
}
