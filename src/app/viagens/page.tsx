'use client';

import Link from "next/link";
import ViagensCard from "@/components/ViagensCard/page";
import { viagensdatas } from "@/lib/data";


export default function MinhasViagensPage() {
    return(
        <div className="flex justify-center mb-6 mt-10">

            {/*Botao para cadastrar viagens*/}
            <button className="border-purple-900 text-purple-900 bg-white rounded-md border-2 text-sm font-medium px-3 py-2 hover:bg-purple-100 transition-colors  "> + Cadastrar Viagem</button>

            {/*Cards das viagens */}
            <div>
                <div>
                    {viagensdatas.map((viagemdata) => (
                        <ViagensCard key={viagemdata.id} viagemdata={viagemdata} />
                    ))}
                </div>
            </div>

        </div>
    )


}