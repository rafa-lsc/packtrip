"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { listItemSchema, ListItemFormData } from "@/lib/formValidationSchemas/listItemSchema";
import { Plus, Search } from "lucide-react";
import ItemList from "@/components/ItemList/page";
import { girassol } from "@/lib/fonts";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import LargeButton from "@/components/LargeButton";
import EditItemModal from "@/components/EditItemModal";
import DeleteConfirmationModal from "@/components/DeleteItemConfirmationModal";

import { malaAPI } from "@/lib/storageApi/mala";
import type { ItemListType } from "@/lib/data";

export default function MalaVirtualPage() {
  const [items, setItems] = useState<ItemListType[]>([]);
  const [editingItem, setEditingItem] = useState<ItemListType | null>(null);
  const [deletingItem, setDeletingItem] = useState<ItemListType | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ListItemFormData>({
    resolver: yupResolver(listItemSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    const fetchItems = () => {
      const data = malaAPI.get();
      setItems(data);
    };
    fetchItems();
  }, []);

  const onSubmit = (data: ListItemFormData) => {
    const newItem: ItemListType = {
      id: crypto.randomUUID(), //para id único
      ...data,
    };
    malaAPI.create(newItem);
    setItems(malaAPI.get());
    reset();
  };

  const handleEdit = (updatedItem: ItemListType) => {
    malaAPI.update(updatedItem);
    setItems(malaAPI.get());
    setEditingItem(null);
  };

  const handleDelete = () => {
    if (deletingItem) {
      malaAPI.delete(deletingItem.id);
      setItems(malaAPI.get());
      setDeletingItem(null);
    }
  };

  return (
    <>
      <div className="flex-1 w-full bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex justify-center items-center py-10 px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full min-w-fit md:w-1/2 p-6 flex flex-col gap-6 text-primary">
          <h2 className={`text-center text-xl md:text-2xl font-bold uppercase ${girassol.className}`}>
            Minha Lista de Viagem
          </h2>

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
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none flex-1"
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

          <div>
            <div className="min-w-15 flex border border-gray-300 rounded items-center px-2">
              <Search color="gray" size={20} />
              <input
                type="text"
                placeholder="Buscar por nome/categoria"
                className="w-full border-0 px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Lista de Itens:</h3>
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <ItemList
                id={item.id}
                  key={item.id}
                  marked={item.marked}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onEdit={() => setEditingItem(item)}
                  onDelete={() => setDeletingItem(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EditItemModal
        isOpen={!!editingItem}
        item={editingItem}
        onClose={() => setEditingItem(null)}
        onSave={handleEdit}
      />

      <DeleteConfirmationModal
        isOpen={!!deletingItem}
        onClose={() => setDeletingItem(null)}
        onConfirm={handleDelete}
        item={deletingItem}
      />
    </>
  );
}
