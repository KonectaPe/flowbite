import React from 'react'
import LogoFlowbite from '../../assets/logo-flowbite.svg'

export default function General() {
  return (
    <div className="flex flex-col items-start justify-center rounded-2xl gap-6 p-8">
        <img className="h-8 w-auto" src={LogoFlowbite} alt="" />
        <p className="">Nombre de usuario</p>
        <input className="w-full bg-[#f2f2f2] text-black p-2 rounded-xl" type="text" />
        <p className="">¿A que te dedicas?</p>
        <input className="w-full bg-[#f2f2f2] text-black p-2 rounded-xl" type="text" />
        <p>Ubicacion</p> 
        <input className="w-full bg-[#f2f2f2] text-black p-2 rounded-xl" type="text" />
        <p>Sitio web</p>
        <input className="w-full bg-[#f2f2f2] text-black p-2 rounded-xl" type="text" />
      </div>
  )
}
