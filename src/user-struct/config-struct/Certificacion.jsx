import React from 'react'

export default function Certificacion() {
  return (
    <div className="flex flex-col items-start justify-center pl-5 gap-3">
      <div>
        <p className="text-xl">Certificados</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p>Emitido*</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="date" />
        </div>

        <div>
          <p>Expira*</p>
          <input className=" w-full bg-[#f2f2f2] text-black p-1 rounded-xl" type="date" />
        </div>

        <div>
          <p>Curso/Diploma</p>
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
    </div>
  )
}
