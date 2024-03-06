import { Link } from "react-router-dom";
import { usePosts } from "../context/postsContext";
import { useEffect } from "react";
import { ImFileEmpty } from "react-icons/im";
const HomePage = () => {
  const { allPosts, getAllPosts } = usePosts();
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      {allPosts.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">Aún no hay publicaciones</h1>
          </div>
        </div>
      )}
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
    </>
  );
};

export default HomePage;
