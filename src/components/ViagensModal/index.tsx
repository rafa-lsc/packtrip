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

import { girassol } from "@/lib/fonts";
import { poppins } from "@/lib/fonts";



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
            <DialogContent className="max-h-[80vh] overflow-hidden p-0 rounded-2xl">
                <div className="overflow-y-auto max-h-[80vh] p-6">
                <DialogHeader>
                    <DialogTitle className={` ${girassol.className} flex justify-center pb-2 text-primary text-4xl`}> Cadastrar Viagem</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <div className="flex flex-col pl-2 pr-2 space-y-6">
                        {/*Destino*/}
                        <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-5">
                            <label className="text-primary text-lg" htmlFor="destination">Destino:</label>
                            <input className=" max-h-8 p-2 border-2 border-gray-300 rounded-lg w-full placeholder:text-indigo-200 placeholder:text-sm" type="text" id="destination" placeholder="Ex: Espanha" {...register("destination")} />
                            </div>
                            {errors.destination && <span className="text-xs text-red-500">{errors.destination.message}</span>}
                        </div>

                        {/*Categoria*/}
                        <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3">
                            <label className="text-primary text-lg" htmlFor="category">Categoria:</label>
                            <input className="max-h-8 p-2 border-2 border-gray-300 rounded-lg w-full placeholder:text-indigo-200 placeholder:text-sm" type="text" id="category" placeholder="Ex: Trabalho"{...register("category")}/>
                              </div>
                              {errors.category && <span className="text-xs text-red-500">{errors.category.message}</span>}
                        </div>

                        {/*Date In*/}
                        <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3 ">
                            <label className="text-primary text-lg whitespace-nowrap" htmlFor="date_in">Data de Partida:</label>
                            <input className="max-h-8 p-2 border-2 border-gray-300 rounded-lg w-full placeholder:text-indigo-200 placeholder:text-sm" type="text" id="date_in" placeholder="Ex: Trabalho"{...register("date_in")}/>
                              </div>
                              {errors.date_in && <span className="text-xs text-red-500">{errors.date_in.message}</span>}
                        </div>

                        {/*date_out*/}
                        <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3">
                            <label className="text-primary text-lg whitespace-nowrap" htmlFor="date_out">Data de Volta:</label>
                            <input className="max-h-8 p-2 border-2 border-gray-300 rounded-lg w-full placeholder:text-indigo-200 placeholder:text-sm" type="text" id="date_out" placeholder="Ex: Trabalho"{...register("date_out")}/>
                              </div>
                              {errors.date_out && <span className="text-xs text-red-500">{errors.date_out.message}</span>}
                        </div>

                        {/*URL imagem*/}
                        <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3">
                            <label className="text-primary text-lg whitespace-nowrap" htmlFor="imageURl">URL da Imagem:</label>
                            <input className="max-h-8 p-2 border-2 border-gray-300 rounded-lg w-full placeholder:text-indigo-200 placeholder:text-sm" type="text" id="imageURl" placeholder="/placeholder.svg" {...register("imageURl")}/>
                              </div>
                              {errors.imageURl && <span className="text-xs text-red-500">{errors.imageURl.message}</span>}
                        </div>

                        {/*Estadia*/}
                        <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3">
                            <label className="text-primary text-lg" htmlFor="staying">Estadia:</label>
                            <input className="max-h-8 p-2 border-2 border-gray-300 rounded-lg w-full placeholder:text-indigo-200 placeholder:text-sm" type="text" id="staying" placeholder="Ex: Hotel Madrid" {...register("staying")}/>
                              </div>
                              {errors.staying && <span className="text-xs text-red-500">{errors.staying.message}</span>}
                        </div>
                    </div>


                <div className="flex flex-col gap-2 pl-2 pr-2 ">
                    <h2 className="text-lg flex  text-primary pt-2"> Pontos Turísticos</h2>
  
                    {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2 ">
                        <input
                            {...register(`touristic.${index}.value` as const)}
                            defaultValue={field.value}
                            placeholder={`Ponto turístico #${index + 1}`}
                            className="max-h-8 p-2 border-2 border-zinc-400 placeholder:text-indigo-200 placeholder:text-sm rounded-lg flex-1"
                        />
                        {fields.length > 1 && (
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="text-primary text-xs border-primary border-2 rounded-lg pl-6 pr-6 pt-2 pb-2"
                            >
                                Remover
                            </button>
                        )}
                    </div>
                    ))}


                </div>
                <div className="pl-2 ">
                    <button type="button" onClick={() => append({ value: "" })} className="text-sm bg-primary text-white p-3 rounded-lg w-fit ">
                        Adicionar ponto turístico
                    </button>
                </div>

                    <div className="flex justify-end gap-4 mt-4">
                        <button type="button" onClick={onClose} className="bg-white border-primary border-1 text-primary rounded-xl pr-6 pl-6 pb-4 pt-4">Cancelar</button>
                        <LargeButton text="Criar Viagem" />
                    </div>

            </form>
            </div>
            </DialogContent>
        </Dialog>
    );
}