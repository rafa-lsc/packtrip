"use client";

import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog"
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { viagemSchema, ViagemFormData } from "@/lib/formValidationSchemas/viagemSchema";
import LargeButton from "../LargeButton";
import { Button } from "../ui/button";
import { ViagemData } from "@/lib/data";
import { viagemAPI } from "@/lib/storageApi/viagem";



interface ViagensModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreated?: () => void; 
}

export default function ViagensModal({isOpen, onClose, onCreated}: ViagensModalProps) {

    const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  control,
} = useForm<ViagemFormData>({
  resolver: yupResolver(viagemSchema),
  defaultValues: {
    touristic: [{value: ""}],
  },
});
  
  const { fields, append, remove } = useFieldArray({
  control,
  name: "touristic",
});


  const onSubmit = (data: ViagemFormData) => {
  const novaViagem: ViagemData = {
    id: crypto.randomUUID(),
    destination: data.destination,
    category: data.category,
    date_in: data.date_in,
    date_out: data.date_out,
    staying: data.staying,
    imageURl: data.imageURl,
    touristic: data.touristic.map((item) => item.value), // <- transforma [{value:"x"}] em ["x"]
  };

    try {
    viagemAPI.create(novaViagem);
    toast.success("Viagem criada com sucesso!");
    reset();
    onCreated?.();
    onClose();
  } catch {
    toast.error("Erro ao salvar viagem.");
  }
};
   



    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle> Cadastrar Viagem</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <div className="flex flex-col gap-4">
                        {/*Destino*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="destination">Destino</label>
                            <input className="p-2 border-2 border-black" type="text" id="destination" placeholder="Ex: Espanha" {...register("destination")} />
                            {errors.destination && <span className="textsmall text-red-500">{errors.destination.message}</span>}
                        </div>

                        {/*Categoria*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className="p-2 border-2 border-black" type="text" id="category" placeholder="Ex: Trabalho"{...register("category")}/>
                              {errors.category && <span className="textsmall text-red-500">{errors.category.message}</span>}
                        </div>

                        {/*Date In*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="date_in">Data de Partida</label>
                            <input className="p-2 border-2 border-black" type="text" id="date_in" placeholder="Ex: Trabalho"{...register("date_in")}/>
                              {errors.date_in && <span className="textsmall text-red-500">{errors.date_in.message}</span>}
                        </div>

                        {/*date_out*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="date_out">Data de Volta</label>
                            <input className="p-2 border-2 border-black" type="text" id="date_out" placeholder="Ex: Trabalho"{...register("date_out")}/>
                              {errors.date_out && <span className="textsmall text-red-500">{errors.date_out.message}</span>}
                        </div>

                        {/*URL imagem*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="imageURl">URL da Imagem</label>
                            <input className="p-2 border-2 border-black" type="text" id="imageURl" placeholder="/placeholder.svg" {...register("imageURl")}/>
                              {errors.imageURl && <span className="textsmall text-red-500">{errors.imageURl.message}</span>}
                        </div>

                        {/*Estadia*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="staying">Estadia</label>
                            <input className="p-2 border-2 border-black" type="text" id="staying" placeholder="Ex: Hotel Madrid" {...register("staying")}/>
                              {errors.staying && <span className="textsmall text-red-500">{errors.staying.message}</span>}
                        </div>
                    </div>


                {fields.map((field, index) => (
                    <input
                        key={field.id ?? index}
                        {...register(`touristic.${index}.value` as const)}
                        defaultValue={field.value}
                        placeholder={`Ponto turístico #${index + 1}`}
                        className="p-2 border-2 border-black"
                    />
                ))}

                    <button onClick={() => append({value:""})}>Adicionar ponto turistico</button>

                    <div className="flex justify-end gap-2 mt-4">
                        <Button type="button" onClick={onClose} className="bg-red-600 text-white">Cancelar</Button>
                        <LargeButton text="Criar Viagem" />
                    </div>

            </form>
            </DialogContent>
        </Dialog>
    );
}