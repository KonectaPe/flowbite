import { usePosts } from "../../context/postsContext";
import { Button, ButtonLink, Card } from "../ui";

export const PostCard = ({ post }) => {
  const { deleteTask } = usePosts();
  return (
    <div
      key={post.id}
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
  );
};
