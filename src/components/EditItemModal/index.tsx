"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ItemListType } from "@/lib/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { listItemSchema, ListItemFormData } from "@/lib/formValidationSchemas/listItemSchema";
import LargeButton from "../LargeButton";
interface EditItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: ItemListType) => void;
  item: ItemListType | null;
}

export default function EditItemModal({ isOpen, onClose, onSave, item }: EditItemModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ListItemFormData>({
    resolver: yupResolver(listItemSchema),
    defaultValues: item ?? {
      name: "",
      quantity: 1,
      category: "",
    },
  });

  useEffect(() => {
    if (item) {
      reset(item);
    }
  }, [item, reset]);

  const onSubmit = (data: ListItemFormData) => {
    if (item) {
      onSave({ ...data, id: item.id });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> <span className="text-primary">Editar Item</span> </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <span className="text-primary">Nome:</span>
          <input
            type="text"
            placeholder="Nome do item"
            className="border border-gray-300 rounded-md px-3 py-2"
            {...register("name")}
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
          <span className="text-primary">Quantidade:</span>
          <input
            type="number"
            placeholder="Quantidade"
            className="border border-gray-300 rounded-md px-3 py-2"
            {...register("quantity")}
          />
          {errors.quantity && <span className="text-sm text-red-500">{errors.quantity.message}</span>}
          <span className="text-primary">Categoria:</span>
          <select className="border border-gray-300 rounded-md px-3 py-2" {...register("category")}>
            <option value="">Categoria</option>
            <option>Roupas</option>
            <option>Higiene</option>
            <option>Eletrônicos</option>
            <option>Saúde</option>
            <option>Documentos</option>
            <option>Lazer</option>
            <option>Alimentos</option>
          </select>
          {errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}

          <div className="flex justify-end gap-2">
            <Button onClick={onClose} type="button" className="h-full bg-red-600 text-white cursor-pointer" variant="outline">Cancelar</Button>
            <LargeButton text="Salvar"/>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
