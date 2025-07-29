

import { ViagemData } from "@/lib/data";
import Image from "next/image";
import image from "next/image";
import { Trash, Trash2 } from "lucide-react";
import { Pen } from "lucide-react";
import LargeButton from "../LargeButton";
import Link from "next/link";

interface ViagemCardProps{
    viagemdata: ViagemData
}

    export default function ViagensCard( { viagemdata }: ViagemCardProps){
        return( 
            <div className=" border rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 transition-shadow sm:w-100 md:w-80 lg:w-80 xl:w-80 bg-white ">
                {/*TODO: link do card com o modal da descrição completa da viagem */}
                <div  className="relative h-48 ml-3 mr-3 mt-3 ">
                    <Image
                        src={viagemdata.imageURl}
                        fill
                        alt= {viagemdata.destination}
                        className="object-cover rounded-lg"
                    />
                </div>
                    <div className="bg-purple-100 text-purple-900 border-2 border-purple-900 rounded-md text-sm px-1 w-fit mt-3 ml-3">
                        <h3>{viagemdata.category}</h3>
                    </div>
                    <h2 className="font-bold text-purple-1100 text-xl ml-3 mt-2 "> {viagemdata.destination}</h2>
                    <div className="ml-3 mb-2 mt-3 mr-3 text-lg flex "> 
                        <Link
                            href={`/viagemComplete/${viagemdata.id}`}
                            className="px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                        >
                        Ver Detalhes
                        </Link>
                        <button className=" flex items-center justify-center ml-2 border-2 border-gray-400 rounded-md hover:bg-gray-200 transition-colors p-1 min-w-13 "> <Trash2/></button>
                        <button className="flex items-center justify-center ml-2 border-2 border-gray-400 rounded-md hover:bg-gray-200 transition-colors p-1 min-w-13"><Pen/></button>
                    </div>



            </div>
        )
    }