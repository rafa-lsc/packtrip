"use client"

import Link from "next/link";
import ViagensCard from "@/components/ViagensCard/page";
import { viagensdatas } from "@/lib/data";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import ViagensModal from "@/components/ViagensModal";
import EditViagemModal from "@/components/EditViagemModal";
import DeleteViagemModal from "@/components/DeleteViagensModal";
import { viagemAPI } from "@/lib/storageApi/viagem";
import { ViagemData } from "@/lib/data";




export default function MinhasViagensPage(){
    const [isViagensModalOpen, setIsViagensModalOpen] = useState(false);
    const [viagens, setViagens] = useState<ViagemData[]>([]);
    const [editingViagem, setEditingViagem] = useState<ViagemData | null>(null);
    const [deletingViagem, setDeletingViagem] = useState<ViagemData | null>(null);


    useEffect(() => {
        const locais = viagemAPI.get();
        const todas = [...viagensdatas, ...locais];
        setViagens(todas);
    }, []);


    const reloadData = () => {
        const locais = viagemAPI.get();
        const todas = [...viagensdatas, ...locais];
        setViagens(todas);
    };


    const handleDelete = () => {
        if (deletingViagem) {
            viagemAPI.delete(deletingViagem.id);
            setDeletingViagem(null);
            reloadData();
        }
    };

    const handleEdit = (updated: ViagemData) => {
        viagemAPI.update(updated);
        setEditingViagem(null);
        reloadData(); ;
    };





    return(
        <div className="container mx-auto p-6 pt-10">

            {/*Botao para cadastrar viagens*/}
            <div className="flex justify-center mb-5 mt-3">
                <button
                    onClick={() => setIsViagensModalOpen(true)} 
                    className=" cursor-pointer bg-primary text-white px-6 py-2 rounded-xl sm:text-lg text-base font-semibold flex items-center gap-2 hover:opacity-90 transition"  
                > <Plus/> Cadastrar Viagem</button>
            </div>
            {/*Cards das viagens */}
            <div className=" bg-gradient-to-r from-[#5de0e6] to-[#004aad] p-5 rounded-lg shadow-md px-4  w-full  ">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 justify-items-center w-full xl:grid-cols-3 max-sm:justify-center">
                    {viagens.map((viagemdata) => (
                        <ViagensCard key={viagemdata.id} viagemdata={viagemdata} onEdit={() => setEditingViagem(viagemdata)}
                             onDelete={() => setDeletingViagem(viagemdata)} />
                    ))}
                </div>
            </div>



        <ViagensModal isOpen={isViagensModalOpen} onClose={() => setIsViagensModalOpen(false)} onCreated={reloadData} />

        <EditViagemModal isOpen={!!editingViagem} item={editingViagem} onClose={() => setEditingViagem(null)} onSave={handleEdit} />
        <DeleteViagemModal isOpen={!!deletingViagem} item={deletingViagem} onClose={() => setDeletingViagem(null)} onConfirm={handleDelete} />

        </div>
    )


}