import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Message, Input, Label } from "../components/ui";
import { usePosts } from "../context/postsContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";

const PostFormPage = () => {
  const { createPost, errors: postsErrors, getTask, updateTask } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(data);
      } else {
        createPost(data);
      }

      navigate("/posts");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadPost = async () => {
      if (params.id) {
        const post = await getTask(params.id);
        setValue("title", post.title);
        setValue("description", post.description);
        setValue("link", post.link);
        setValue("image", post.image);
      }
    };
    loadPost();
  }, []);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {postsErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="title">Titulo</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              Por favor ingrese un titulo
            </p>
          )}

          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Descripción"
            {...register("description")}
          ></Textarea>

          <Label htmlFor="link">Link de página web en vivo</Label>
          <Input
            type="text"
            name="link"
            id="link"
            placeholder="Link de página web en vivo"
            {...register("link")}
          />
          {errors.link && (
            <p className="text-red-500 text-xs italic">
              Por favor ingrese un link de tu página web en vivo
            </p>
          )}

          <Label htmlFor="image">Link de imagen de tú página web</Label>
          <Input
            type="text"
            name="image"
            id="image"
            placeholder="Link de imagen de tú página web"
            {...register("image")}
          />
          {errors.link && (
            <p className="text-red-500 text-xs italic">
              Por favor ingrese un link de imagen de tu página web
            </p>
          )}

          <Button>Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default PostFormPage;
