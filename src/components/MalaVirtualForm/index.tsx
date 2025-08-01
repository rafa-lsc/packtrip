"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { listItemSchema, ListItemFormData } from "@/lib/formValidationSchemas/listItemSchema";
import LargeButton from "@/components/LargeButton";
import { Plus } from "lucide-react";

export default function MalaVirtualForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ListItemFormData>({
    resolver: yupResolver(listItemSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: ListItemFormData) => {
    console.log("Item adicionado:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-4 border-b-1 pb-1 border-primary">
      <h3 className="font-semibold m-0 p-0">Adicionar Novo Item:</h3>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <input
            type="text"
            placeholder="Ex: escova de dente"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-48">
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            {...register("category")}
          >
            <option>Categorias</option>
            <option>Roupas</option>
            <option>Higiene</option>
            <option>Eletrônicos</option>
            <option>Saúde</option>
            <option>Documentos</option>
            <option>Lazer</option>
            <option>Alimentos</option>
          </select>
          {errors.category && (
            <span className="text-sm text-red-500">{errors.category.message}</span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-2">
        <label className="text-sm font-semibold">Quantidade:</label>
        <input
          type="number"
          defaultValue={1}
          className="w-20 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          {...register("quantity")}
        />
        {errors.quantity && (
          <span className="text-sm text-red-500">{errors.quantity.message}</span>
        )}

        <LargeButton icon={<Plus color="white" />} text="Adicionar Item" />
      </div>
    </form>
  );
}
