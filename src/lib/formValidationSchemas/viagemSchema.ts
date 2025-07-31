import * as yup from "yup";
import { ViagemData } from "@/lib/data";

export const viagemSchema = yup.object().shape({
  destination: yup.string().required("Destino é obrigatório"),
  category: yup.string().required("Categoria é obrigatória"),
  date_in: yup.string().required("Data de ida é obrigatória"),
  date_out: yup.string().required("Data de volta é obrigatória"),
  staying: yup.string().required("Hospedagem é obrigatória"),
  imageURl: yup.string().required("URL da imagem é obrigatória"),
  touristic: yup
    .array()
    .of(
        yup.object({
            value: yup.string().required("Ponto turístico obrigatório"),
        })
    )
    .min(1, "Informe ao menos 1 ponto turístico").required(),
});

export type ViagemFormData = yup.InferType<typeof viagemSchema>;