import LargeButton from "@/components/LargeButton";
import { viagensdatas} from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Pen, Trash2 } from "lucide-react";




interface ViagemCompletePageProps {
    params:{
        id: string;
    }
} 

export default function ViagemCompletePage({ params}: ViagemCompletePageProps) {
    const viagemdata = viagensdatas.find((viagemdata) => viagemdata.id === params.id)

    if (!viagemdata) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 text-xl font-bold">Viagem não encontrada.</p>
      </div>
    );
  }

    return (
        <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-xl  w-full max-w-xl mb-4 mt-2">

                <div>
                    <div className="grid grid-cols-2 relative w-full h-18">
                        <button className="absolute left-5 top-1/2 -translate-y-1/2 border-2 pl-7 pr-7 pb-1 pt-1 text-primary rounded-2xl flex hover:bg-purple-100 transition-colors "> <ArrowLeft/> Voltar</button>
                        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-purple-950 ">{viagemdata.destination}</h1>
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

                    <div className="bg-blue-50 text-primary font-bold rounded-xl text-xl w-fit px-2 py-1 mt-3 ml-4 ">
                        {viagemdata.category}
                    </div>

                    <div className="ml-4 mt-5 grid grid-cols-2 gap-4 text-primary">
                        <div className="">
                        <h3 className="mb-1">Data de Partida: {viagemdata.date_in}</h3>
                        <h3>Data de Volta: {viagemdata.date_out}</h3>
                        </div>
                        <h3>Estadia/Hotel: {viagemdata.staying}</h3>
                    </div>
                    
                    <h3 className=" flex justify-center font-bold mt-12 text-primary text-bold">Pontos Turísticos a visitar</h3>
                    <h3 className="ml-4 mt-3 mb-6 ">{viagemdata.touristic}</h3>

                    <div className=" flex justify-center p-2 gap-6">
                        <LargeButton text= "Delete" route="/viagens" icon = <Trash2/> />
                        <LargeButton text= "Editar" route="/viagens" icon = <Pen/> />
                    
                </div>
            </div>
        </div>
    );
}