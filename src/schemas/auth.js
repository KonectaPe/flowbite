import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
});

export const registerSchema = z
  .object({
    fullName: z
      .string({
        required_error: "Se requiere nombre completo",
      })
      .min(4, {
        message: "El nombre completo debe tener al menos 4 caracteres",
      }),
    username: z
      .string({
        required_error: "Se requiere nombre de usuario",
      })
      .min(4, {
        message: "El nombre de usuario debe tener al menos 4 caracteres",
      }),
    email: z.string().email({
      message:
        "Por favor, introduce una dirección de correo electrónico válida",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
