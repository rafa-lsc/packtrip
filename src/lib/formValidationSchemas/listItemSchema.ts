import * as yup from "yup";

export const listItemSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "O nome do item deve ter pelo menos 3 caracteres")
    .required("O nome do item é obrigatório"),
  category: yup
    .string()
    .required("A categoria é obrigatória")
    .notOneOf(["Categorias", "categoria"], "Escolha uma categoria válida"),
  quantity: yup
    .number()
    .typeError("A quantidade deve ser um número")
    .positive("A quantidade deve ser maior que 0")
    .integer("A quantidade deve ser um número inteiro")
    .required("A quantidade é obrigatória"),
});

export type ListItemFormData = yup.InferType<typeof listItemSchema>;
