import React from "react";
import { SlLike } from "react-icons/sl";

export default function Actividad() {
  const handiClick = (id) => {
    if(document.getElementById(`like${id}`).style.color === "red")
    {
      document.getElementById(`like${id}`).style.color = "black";
    }else
      document.getElementById(`like${id}`).style.color = "red";
      
  }

  const Arraydiv = Array(12).fill(null);
    return (
    <div className="grid grid-cols-1 overflow-x-hidden sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2 w-full p-4">
      {Arraydiv.map((div,index) => {
        return (
          <div className="border-2 border-black rounded-lg flex items-start justify-center flex-col gap-2 h-56 px-4">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <h3 className="text-[#999999]">UserName</h3>
            <p className="">Aca va tus posteos diarios que realices</p>
            <h3 className="text-[#999999]">tiempo de publicacion</h3>
            <div className="w-full flex justify-between items-center pr-5">
            <input
              placeholder="Respuesta directa"
              className="bg-[#eee6e6] w-48 rounded-lg px-2 py-2"
              type="text"
              
            />
            <SlLike id={`like${index}`} className="text-3xl cursor-pointer" onClick={()=>handiClick(index)} />
            </div>
          </div>
        ); 
        
      }
      )} 
    </div>
  );
}
