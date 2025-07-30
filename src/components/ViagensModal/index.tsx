"use client";

import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog"
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import {
  listItemSchema,
  ListItemFormData,
} from "@/lib/formValidationSchemas/listItemSchema";
import LargeButton from "../LargeButton";
import { Button } from "../ui/button";

import { ViagemData } from "@/lib/data";
import { viagemAPI } from "@/lib/storageApi/viagem";
import { viagemSchema } from "@/lib/formValidationSchemas/viagemSchema";


interface ViagensModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreated: () => void;
}

export default function ViagensModal({isOpen, onClose, onCreated}: ViagensModalProps) {

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ViagemData>({
    resolver: yupResolver(viagemSchema),
    mode: "onSubmit",
  });



    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle> Cadastrar Viagem</DialogTitle>
                </DialogHeader>

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
                    </div>

                        {/*URL imagem*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="imageURl">Descrição</label>
                            <input className="p-2 border-2 border-black" type="text" id="imageURl" placeholder="/placeholder.svg" {...register("imageURl")}/>
                              {errors.imageURl && <span className="textsmall text-red-500">{errors.imageURl.message}</span>}
                        </div>

                        {/*Estadia*/}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="staying">Url da imagem</label>
                            <input className="p-2 border-2 border-black" type="text" id="staying" placeholder="Ex: Hotel Madrid" {...register("staying")}/>
                              {errors.staying && <span className="textsmall text-red-500">{errors.staying.message}</span>}
                        </div>




            </DialogContent>
        </Dialog>




    );
}