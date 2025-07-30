"use client"

import Link from "next/link";
import ViagensCard from "@/components/ViagensCard/page";
import { viagensdatas } from "@/lib/data";
import { useState } from "react";
import { Plus } from "lucide-react";
import ViagensModal from "@/components/ViagensModal";


export default function MinhasViagensPage() {
    const [isViagensModalOpen, setIsViagensModalOpen] = useState(false);


    return(
        <div className="container mx-auto p-6 pt-10">

            {/*Botao para cadastrar viagens*/}
            <div className="flex justify-center mb-5 mt-3">
                <button
                    onClick={() => setIsViagensModalOpen(true)} 
                    className=" bg-primary text-white px-6 py-2 rounded-xl sm:text-lg text-base font-semibold flex items-center gap-2 hover:opacity-90 transition"  
                > <Plus/> Cadastrar Viagem</button>
            </div>
            {/*Cards das viagens */}
            <div className="flex justify-center bg-gradient-to-r from-[#5de0e6] to-[#004aad] p-5 rounded-lg shadow-md px-4 sm:px-8 md:px-12 xl:px-32 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {viagensdatas.map((viagemdata) => (
                        <ViagensCard key={viagemdata.id} viagemdata={viagemdata} />
                    ))}
                </div>
            </div>



        <ViagensModal isOpen={isViagensModalOpen} onClose={() => setIsViagensModalOpen(false)} />
        </div>
    )


}