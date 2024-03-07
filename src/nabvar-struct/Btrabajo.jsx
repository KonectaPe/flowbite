import React from "react";

export default function Btrabajo() {
  const Arraydiv = Array(12).fill(null);
  

  return (
    <div className="w-[90%]">
      <div>
        {/*Tabla de contenido*/}
        <div className="">
          <div className="flex justify-around items-center mt-3 gap-2">
            <p className="w-[15%] text-[#999999]">Equipo</p>
            <p className="w-[25%] text-[#999999]">Puesto</p>
            <p className="w-[20%] text-[#999999]">Tipo</p>
            <p className="w-[15%] text-[#999999]">Ubicacion</p>
            <p className="w-[15%] text-[#999999]">Publicada</p>
          </div>
          {Arraydiv.map((div, index) => {
            return (
              
                <div key={index}>
                  <div className="flex justify-around items-center mt-3 gap-2">
                    <p className="w-[15%]">Texto</p>
                    <p className="w-[25%]">texto</p>
                    <p className="w-[20%]">texto</p>
                    <p className="w-[15%]">texto</p>
                    <p className="w-[15%]">texto</p>
                  </div>
                  <hr className="border-2" />
                </div>
            
            );
          })}
        </div>
      </div>
    </div>
  );
}
