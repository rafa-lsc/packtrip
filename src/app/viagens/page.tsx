

import Link from "next/link";
import ViagensCard from "@/components/ViagensCard/page";
import { viagensdatas } from "@/lib/data";
import { poppins } from "@/app/layout";
import LargeButton from "@/components/LargeButton";


export default function MinhasViagensPage() {
    return(
        <div className="container mx-auto p-6 pt-10">

            {/*Botao para cadastrar viagens*/}
            <div className="flex justify-center mb-5 mt-3">
                <LargeButton text="+ Cadastrar Viagens" route="/ViagemComplete " />
            </div>
            {/*Cards das viagens */}
            <div className="flex justify-center bg-blue-500 p-5 rounded-lg shadow-md px-4 sm:px-8 md:px-12 xl:px-32 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {viagensdatas.map((viagemdata) => (
                        <ViagensCard key={viagemdata.id} viagemdata={viagemdata} />
                    ))}
                </div>
            </div>

        </div>
    )


}