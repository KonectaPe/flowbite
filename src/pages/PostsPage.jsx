import { useEffect } from "react";
import { usePosts } from "../context/postsContext";
import { PostCard } from "../components/posts/PostCard";
import { ImFileEmpty } from "react-icons/im";

const PostsPage = () => {
  const { posts, getPosts } = usePosts();
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              Aún no hay publicaciones, agregue una nueva publicación
            </h1>
          </div>
        </div>
      )}
      <h1 className="text-center my-5">Tus ultimas publicaciones</h1>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2 h-[100%] w-[100%] ">
        {posts?.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default PostsPage;
