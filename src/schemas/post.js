import { z } from "zod";

export const postSchema = z.object({
  title: z.string({
     message: "Titulo es requerido",
  }),
  description: z.string({
     message: "Descripción es requerido",
  }),
  link: z.string({
     message: "Link del proyecto en vivo es requerido",
  }),
  image: z.string({
     message: "Link de imagen es requerido",
  }),
});
