import LargeButton from "@/components/LargeButton";
import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";
import { ViagemData } from "@/lib/data";
import Image from "next/image";

interface ViagemCardCompleteProps{
    viagemdata: ViagemData
}


export default function ViagemCompleteCard( { viagemdata }: ViagemCardCompleteProps ) {
    return (
        <div>
            <div>
                <div>
                    <button>Voltar</button>
                    <h1>{viagemdata.destination}</h1>
                </div>
                <div className="relative h-48 ml-3 mr-3 mt-3 ">
                 <Image
                        src={viagemdata.imageURl}
                        fill
                        alt= {viagemdata.destination}
                        className="object-cover rounded-lg"
                 />
                 </div>

                 <h2>{viagemdata.category}</h2>
                 <h3>Data de chegada: {viagemdata.date_in}</h3>
                 <h3>Data de partida: {viagemdata.date_out}</h3>
                 <h3>Estadia/Hotel: {viagemdata.staying}</h3>

                 <h3>Pontos Turísticos a visitar</h3>
                 <h3>{viagemdata.touristic}</h3>

                 <LargeButton text= "Delete" route="/viagens"/>
                 <LargeButton text= "Editar" route="/viagens"/>

                 

            </div>
        </div>


    );
}