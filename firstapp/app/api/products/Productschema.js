import { z } from "zod";
export const schema = z.object({
  id: z.number(),
  name: z.string().min(3),
  category: z.string(),
  price: z.number(),
  instock: z.boolean(),
});
export const schemaTwo = z.object({
  name: z.string().min(3),
  category: z.string(),
  price: z.number(),
  instock: z.boolean(),
});