import { LucideEdit, LucideTrash2 } from "lucide-react";
import LargeButton from "@/components/LargeButton";
import { Search } from "lucide-react";
import { poppins } from "@/app/layout";
import { Plus } from "lucide-react";
import ItemList from "@/components/ItemList/page";
import { girassol } from "@/app/layout";

export default function MalaVirtualPage() {
  return (
    <div className="flex-1 w-full bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex justify-center items-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full min-w-fit md:w-1/2 p-6 flex flex-col gap-6 text-primary">

        <h2 className={`text-center text-xl md:text-2xl font-bold uppercase ${girassol.className} `}>
          Minha Lista de Viagem
        </h2>
        


        <div className=" gap-4 border-b-1 pb-1 border-primary">
            <h3 className="font-semibold  m-0 p-0">Adicionar Novo Item:</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Ex: escova de dente"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
            <select className="w-full md:w-48 border border-gray-300 rounded-md px-3 py-2 focus:outline-none">
              <option>Categorias</option>
              <option>Roupas</option>
              <option>Higiene</option>
              <option>Eletrônicos</option>
              <option>Saúde</option>
              <option>Documentos</option>
              <option>Lazer</option>
              <option>Alimentos</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="text-sm font-semibold">Quantidade:</label>
            <input
              type="number"
              defaultValue={1}
              className="w-20 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
              <LargeButton
                icon={<Plus color="white" />}
                text="Adicionar Item"
              />
          </div>
        </div>

        
        <div>
          <div className="min-w-15 flex  border border-gray-300 rounded  items-center px-2">
            <Search color="gray" size={20} />
            <input
              type="text"
              placeholder="Buscar por nome/categoria"
              className="w-full border-0 px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold  mb-2">Lista de Itens:</h3>
          <div className="flex flex-col gap-3">
            <ItemList name="Camisetas" quantity={3} category="Roupas" />
            <ItemList name="Escova de dentes" quantity={2} category="Higiene" />
            <ItemList name="Carregador" quantity={1} category="Eletrônicos" />
            <ItemList name="Shorts" quantity={2} category="Roupas" />
          </div>
        </div>
      </div>
    </div>
  );
}
