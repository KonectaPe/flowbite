import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterPage = () => {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/posts");
  }, [isAuthenticated]);
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold">Registrate</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <Label htmlFor="fullName">Nombre completo:</Label>
          <Input
            type="text"
            name="fullName"
            placeholder="John Doe"
            {...register("fullName")}
            autoFocus
          />
          {errors.fullName?.message && (
            <p className="text-red-500">{errors.fullName?.message}</p>
          )}

          <Label htmlFor="username">Nombre de usuario:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Ingresa tu nombre de usuario"
            {...register("username")}
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Correo electrónico:</Label>
          <Input
            name="email"
            placeholder="tuemail@gmail.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
          <Button>Registrate</Button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿Ya tienes una cuenta?
          <Link className="text-sky-500" to="/login">
            Iniciar sesión
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
