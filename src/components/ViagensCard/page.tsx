

import { ViagemData } from "@/lib/data";
import Image from "next/image";
import image from "next/image";
import { Eye, Trash, Trash2 } from "lucide-react";
import { Pen } from "lucide-react";
import LargeButton from "../LargeButton";
import Link from "next/link";

interface ViagemCardProps{
    viagemdata: ViagemData;
    onEdit?: () => void;
    onDelete?: () => void;
}

    export default function ViagensCard( { viagemdata, onEdit, onDelete }: ViagemCardProps){
        return( 
            <div className="bg-white p-1 rounded-lg shadow-xl border w-[90%] max-w-[350px] xl:min-w-[320px] md:min-w-[300px] max-sm:justify-center">
                <div  className="relative h-48 ml-3 mr-3 mt-3 ">
                    <Image
                        src={viagemdata.imageURl}
                        fill
                        alt= {viagemdata.destination}
                        className="object-cover rounded-lg"
                    />
                </div>
                    <div className="bg-blue-50 text-primary font-bold rounded-xl text-md w-fit px-2 py-0.5 mt-3 ml-3 ">
                        <h3>{viagemdata.category}</h3>
                    </div>
                    <h2 className="font-bold text-purple-1100 text-2xl ml-3 mt-4 "> {viagemdata.destination}</h2>
                    <div className="ml-3 mb-2 mt-3 mr-3 text-sm flex   "> 
                        <Link
                            href={`viagemComplete/${viagemdata.id}`}
                            className=" w-full items-center px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-colors flex-row flex gap-2 whitespace-nowrap"
                        >
                         <Eye/> Ver Detalhes
                        </Link>

                        <div className="hidden sm:flex gap-2">
                            <button
                                onClick={onDelete}
                                className=" flex items-center justify-center ml-2 border-2 border-primary rounded-md hover:bg-gray-200 transition-colors p-1 min-w-13 cursor-pointer"
                                > <Trash2 className="text-primary"/>
                            </button>
                            <button
                                onClick={onEdit} 
                                className="flex items-center justify-center ml-2 border-2 border-primary rounded-md hover:bg-gray-200 transition-colors p-1 min-w-13 cursor-pointer"
                                > <Pen className="text-primary"/>
                            </button>
                        </div>
                    </div>



            </div>
        )
    }