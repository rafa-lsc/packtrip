"use client";

import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { toast } from "sonner";
import { viagemSchema, ViagemFormData } from "@/lib/formValidationSchemas/viagemSchema";
import { ViagemData } from "@/lib/data";
import { Button } from "../ui/button";
import LargeButton from "../LargeButton";

interface EditViagemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: ViagemData) => void;
  item: ViagemData | null;
}

export default function EditViagemModal({
  isOpen,
  onClose,
  onSave,
  item,
}: EditViagemModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ViagemFormData>({
    resolver: yupResolver(viagemSchema),
    defaultValues: {
      destination: "",
      category: "",
      date_in: "",
      date_out: "",
      staying: "",
      imageURl: "",
      touristic: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "touristic",
  });

  useEffect(() => {
    if (item) {
      reset({
        destination: item.destination,
        category: item.category,
        date_in: item.date_in,
        date_out: item.date_out,
        staying: item.staying,
        imageURl: item.imageURl,
        touristic: item.touristic.map((t) => ({ value: t })),
      });
    }
  }, [item, reset]);

  const onSubmit = (data: ViagemFormData) => {
    if (!item) return;
    const updatedViagem: ViagemData = {
      ...item,
      ...data,
      touristic: data.touristic.map((t) => t.value),
    };

    try {
      onSave(updatedViagem);
      toast.success("Viagem atualizada com sucesso!");
      onClose();
    } catch {
      toast.error("Erro ao atualizar viagem.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] overflow-hidden p-0 rounded-2xl">
        <div className="overflow-y-auto max-h-[80vh] p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl text-primary">Editar Viagem</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col space-y-6">
              {/* DESTINO */}
              <div className="flex flex-col">
                <label htmlFor="destination">Destino:</label>
                <input
                  {...register("destination")}
                  id="destination"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                {errors.destination && (
                  <span className="text-xs text-red-500">{errors.destination.message}</span>
                )}
              </div>

              {/* CATEGORIA */}
              <div className="flex flex-col">
                <label htmlFor="category">Categoria:</label>
                <input
                  {...register("category")}
                  id="category"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                {errors.category && (
                  <span className="text-xs text-red-500">{errors.category.message}</span>
                )}
              </div>

              {/* DATE_IN */}
              <div className="flex flex-col">
                <label htmlFor="date_in">Data de partida:</label>
                <input
                  {...register("date_in")}
                  id="date_in"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                {errors.date_in && (
                  <span className="text-xs text-red-500">{errors.date_in.message}</span>
                )}
              </div>

                {/* DATE_OUT */}
              <div className="flex flex-col">
                <label htmlFor="date_out">Data de volta:</label>
                <input
                  {...register("date_out")}
                  id="date_out"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                {errors.date_out && (
                  <span className="text-xs text-red-500">{errors.date_out.message}</span>
                )}
              </div>

              {/* URL */}
              <div className="flex flex-col">
                <label htmlFor="imageURl">URL da imagem:</label>
                <input
                  {...register("imageURl")}
                  id="imageURl"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                {errors.imageURl && (
                  <span className="text-xs text-red-500">{errors.imageURl.message}</span>
                )}
              </div>

              {/* ESTADIA */}
              <div className="flex flex-col">
                <label htmlFor="staying">Estadia:</label>
                <input
                  {...register("staying")}
                  id="staying"
                  className="p-2 border border-gray-300 rounded-lg"
                />
                {errors.staying && (
                  <span className="text-xs text-red-500">{errors.staying.message}</span>
                )}
              </div>

              {/* Pontos Turísticos */}
              <div className="flex flex-col gap-2">
                <label className="text-lg">Pontos turísticos:</label>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2">
                    <input
                      {...register(`touristic.${index}.value` as const)}
                      defaultValue={field.value}
                      className="flex-1 p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-sm text-primary border border-primary rounded-lg px-2 py-1 cursor-pointer"
                    >
                      Remover
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ value: "" })}
                  className="text-sm bg-primary text-white px-3 py-1 rounded-lg w-fit hover:opacity-90 cursor-pointer"
                >
                  Adicionar ponto turístico
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button type="button" onClick={onClose} size={"lg"} className="bg-white border-primary border-1 text-primary rounded-xl pr-6 pl-6 pb-4 pt-4 cursor-pointer hover:bg-indigo-50">
                Cancelar
              </Button>
              <LargeButton text="Salvar Alterações" />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
