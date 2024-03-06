import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/posts");
    }
  }, [isAuthenticated]);
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Label htmlFor="email">Correo electrónico:</Label>
          <Input
            label="Escribe tu correo electrónico"
            type="email"
            name="email"
            placeholder="tuemail@gmail.com"
            {...register("email", { required: true })}
          />
          <p>{errors.email?.message}</p>

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password", { required: true, minLength: 8 })}
          />
          <p>{errors.password?.message}</p>

          <Button>Iniciar sesión</Button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-sky-500">
            Registrate
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
