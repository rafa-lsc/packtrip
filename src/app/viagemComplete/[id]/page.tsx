'use client';
import LargeButton from "@/components/LargeButton";
import { viagensdatas} from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Pen, Trash2 } from "lucide-react";
import EditViagemModal from "@/components/EditViagemModal";
import DeleteViagemModal from "@/components/DeleteViagensModal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; 
import { ViagemData } from "@/lib/data";
import { viagemAPI } from "@/lib/storageApi/viagem";






interface ViagemCompletePageProps {
    params:{
        id: string;
    }
} 

export default function ViagemCompletePage({ params}: ViagemCompletePageProps) {
    const router = useRouter();

    const [viagemdata, setViagem] = useState<ViagemData | null>(null);
    const [isEditing, setIsEditing] = useState(false); 
    const [isDeleting, setIsDeleting] = useState(false); 

    useEffect(() => {
        const locais = viagemAPI.get();
        const todas = [...locais, ...viagensdatas]; 
        const encontrada = todas.find((v) => v.id === params.id);
        setViagem(encontrada || null);
    }, [params.id]);


    const handleUpdate = (updated: ViagemData) => {
        viagemAPI.update(updated);
        setViagem(updated); 
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (!viagemdata) return;
        viagemAPI.delete(viagemdata.id); 
        setIsDeleting(false);
        router.push("/viagens"); 
    };



    if (!viagemdata) {
    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-red-600 text-xl font-bold">Viagem não encontrada.</p>
        </div>
    );
  }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#5de0e6] to-[#004aad] p-5 rounded-lg flex items-center justify-center h-screen overflow-hidden ">
            <div className="bg-white rounded-3xl shadow-xl  w-full max-w-xl mb-4 mt-2">

                <div>
                    <div className="grid grid-cols-2 relative w-full h-18">
                        <Link href={"/viagens"}>
                        <button className="absolute left-5 top-1/2 -translate-y-1/2 border-2 pl-7 pr-7 pb-1 pt-1 text-primary rounded-2xl  hover:bg-indigo-50 transition-colors gap-1 cursor-pointer sm:flex hidden">
                         <ArrowLeft/> Voltar</button>
                        </Link>
                        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-primary ">{viagemdata.destination}</h1>
                    </div>
                </div>
                

                <div className="flex justify-center ml-4 mr-4 mt-2 bg-white rounded-xl ">
                    <Image
                        src= {viagemdata.imageURl}
                        width={500}
                        height={100}
                        alt={viagemdata.destination || "Viagem"}
                        className=" w-full object-cover rounded-lg max-h-50 "
                    />
                </div>

                    <div className="bg-blue-50 text-primary font-bold rounded-xl text-xl w-fit px-2 py-1 mt-3 ml-4 max-sm:">
                        {viagemdata.category}
                    </div>

                    <div className="ml-4 mt-5 grid grid-cols-2 gap-4 text-primary max-sm:flex max-sm:flex-col max-sm:items-center">
                        <div>
                        <div className="flex flex-row mb-1 gap-2">
                        <h3 className="mb-1 whitespace-nowrap">Data de Partida:</h3>
                        <h3 className="text-black">{viagemdata.date_in}</h3>
                        </div>
                        <div className="flex flex-row mb-1 gap-2">
                        <h3 className="mb-1">Data de Volta:</h3>
                        <h3 className="text-black">{viagemdata.date_out}</h3>
                        </div>
                        </div>

                         <div className="flex flex-row mb-1 gap-2">
                        <h3 className="mb-1">Estadia/Hotel:</h3>
                        <h3 className="text-black">{viagemdata.staying}</h3>
                        </div>
                    </div>
                    
                    <h3 className=" flex justify-center font-bold mt-6 text-primary text-bold text-lg">Pontos Turísticos a visitar</h3>

                    <ul className="ml-6 mt-2 mb-6 list-disc pl-3">
                        {viagemdata.touristic.map((ponto, idx) => (
                            <li key={idx}>{ponto}</li>
                        ))}
                    </ul>

                    <div className=" hidden sm:flex justify-center p-2 gap-6">
                        <LargeButton text="Excluir" icon={<Trash2 />} onClick={() => setIsDeleting(true)} />
                        <LargeButton text="Editar" icon={<Pen />} onClick={() => setIsEditing(true)} />
                    </div>

                    <EditViagemModal
                        isOpen={isEditing}
                        onClose={() => setIsEditing(false)}
                        onSave={handleUpdate}
                        item={viagemdata}
                    />


                    <DeleteViagemModal
                        isOpen={isDeleting}
                        onClose={() => setIsDeleting(false)}
                        onConfirm={handleDelete}
                        item={viagemdata}
                    />
            </div>
        </div>
    );
}