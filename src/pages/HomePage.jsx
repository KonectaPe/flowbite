import { Link } from "react-router-dom";
import { usePosts } from "../context/postsContext";
import { useEffect, useState } from "react";
import { ImFileEmpty } from "react-icons/im";
import LogoFlowbite from "../assets/logo-flowbite.svg";
import { GrHelp } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const HomePage = () => {
  const { allPosts, getAllPosts } = usePosts();
  
  useEffect(() => {
    getAllPosts();
  }, []);

  const [mostrarTextoCong, setMostrarTextoCong] = useState(false);
  const [mostrarTextoSup, setMostrarTextoSup] = useState(false);
  const [mostrarTextoHelp, setMostrarTextoHelp] = useState(false);
  const [mostrarTextoContact, setMostrarTextoContact] = useState(false);
  const [mostrarTextoLogout, setMostrarTextoLogout] = useState(false);

  return (
    
    <div>
      
      <div className="w-[5%] top-0 bottom-0 fixed justify-center items-center flex flex-col gap-8">
        
        <Link to="/Configuracion">
          <div
            className="cursor-pointer"
            onMouseEnter={() => setMostrarTextoCong(true)}
            onMouseLeave={() => setMostrarTextoCong(false)}
          >
            <HiOutlineCog6Tooth className="text-2xl" />
            <p
              className={`text-xs absolute rounded-lg p-1 bg-black text-white ${
                mostrarTextoCong ? "opacity-100 animate-cloudIn" : "opacity-0"
              }`}
            >
              Configuracion
            </p>
          </div>
        </Link>

        {/* <Link to="/Soporte">
        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoSup(true)} onMouseLeave={() => setMostrarTextoSup(false)}>
        <BiSupport className="text-2xl"/>
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoSup ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Soporte</p>
        </div>
        </Link> */}

        <Link to="/Ayuda">
          <div
            className="cursor-pointer"
            onMouseEnter={() => setMostrarTextoHelp(true)}
            onMouseLeave={() => setMostrarTextoHelp(false)}
          >
            <GrHelp className="text-2xl" />
            <p
              className={`text-xs absolute rounded-lg p-1 bg-black text-white ${
                mostrarTextoHelp ? "opacity-100 animate-cloudIn" : "opacity-0"
              }`}
            >
              Ayuda
            </p>
          </div>
        </Link>

        {/* <Link to="/Contacto">  
        <div className="cursor-pointer" onMouseEnter={() => setMostrarTextoContact(true)} onMouseLeave={() => setMostrarTextoContact(false)}>
        <IoIosContact className="text-2xl" />
        <p className={`text-xs absolute rounded-lg p-1 bg-black text-white ${mostrarTextoContact ? 'opacity-100 animate-cloudIn' : 'opacity-0'}`}>Contacto</p>
        </div>
        </Link> */}

      </div>

      {allPosts.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">Aún no hay publicaciones</h1>
          </div>
        </div>
      )}
      <div className="flex flex-col pl-24">
      <h1 className="text-center my-5">Publicaciones de talentos</h1>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2 h-[100%] w-[100%] ">
        {allPosts?.map((post) => (
          <div
            key={post._id}
            className="border-2 border-black rounded-lg flex flex-col gap-2 p-4"
          >
            <img
              className="h-100  flex justify-start mt-2 mx-auto"
              src={post.image}
              width={200}
              height={200}
            />
            <h3 className=" ml-3">{post.title}</h3>
            <p className="text-[#999999] ml-3">{post.description}</p>
            <h3 className="text-[#999999] ml-3">Fecha: {post.date}</h3>
            <div className="text-center">
              <a href={post.link} target="_blank">
                Sitio Web en vivo
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HomePage;
