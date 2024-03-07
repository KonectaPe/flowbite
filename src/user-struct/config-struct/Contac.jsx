import React from "react";

export default function Contac() {
  return (
    <div className="flex flex-col items-start w-full pt-20 pl-5 gap-3">
      <div>
        <p className="text-xl">Contacto</p>
      </div>
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-52">
          <label htmlFor="myInput">Tipo*:</label>
          <select className="text-black" id="myInput" name="myInput">
            <option value="opcion0">---------------</option>
            <option value="opcion1">GitHub</option>
            <option value="opcion2">GitLab</option>
            <option value="opcion3">Correo electronico</option>
            <option value="opcion4">Celular</option>
          </select>
        </div>
        <div className="w-full pr-10">
          <p>Ingrese su informacion</p>
          <input
            className=" bg-[#f2f2f2] text-black w-full p-1 rounded-xl"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
