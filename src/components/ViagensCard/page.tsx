'use client';

import { ViagemData } from "@/lib/data";
import Image from "next/image";
import image from "next/image";

interface ViagemCardProps{
    viagemdata: ViagemData
}

    export default function ViagensCard( { viagemdata }: ViagemCardProps){
        return( 
            <div className=" border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full sm:w-80">
                {/*TODO: link do card com o modal da descrição completa da viagem */}
                <div  className="relative h-48 w-full rounded-2xl p-5">
                    <Image
                        src={viagemdata.imageURl}
                        fill
                        alt= {viagemdata.destination}
                        className="object-cover"
                    />
                </div>
                    <div className="bg-purple-100 text-purple-900 border-2 border-purple-900 rounded-md text-sm px-1 ">
                        <h3>{viagemdata.category}</h3>
                    </div>
                    <h2> {viagemdata.destination}</h2>
                    <div>
                        <button>Planejamento</button>
                        <button>Excluir</button>
                        <button>Editar</button>
                    </div>



            </div>
        )
    }