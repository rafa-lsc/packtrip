import { girassol, poppins } from "@/app/layout";
import Link from "next/link";
import { Plane, Luggage } from "lucide-react";
export default function Header() {
  return (
    <div className="container mx-auto h-fit py-2">
      <div className="text-primary  flex justify-between px-2">
        <h1 className={`${girassol.className} text-5xl`}> <Link href={"/"}>PackTrip</Link></h1>
        <ul
          className={`flex flex-row w-1/2 justify-end gap-5 text-sm ${poppins.className}`}
        >
          <li className="hover:bg-secondary flex justify-center items-center w-fit px-2 py-0 rounded-3xl transition-colors ease-in">
            <Link href="/viagens" className="w-fit h-fit p-0 flex items-center ">
              
              <Plane color={"var(--primary)"} className="sm:hidden" />
              <span className="hidden sm:block text-sm md:text-xl ">Minhas viagens</span>
            </Link>
          </li>
          <li className="hover:bg-secondary flex justify-center items-center w-fit px-2 py-0 rounded-3xl transition-colors ease-in">
            <Link
              href="/mala-virtual"
              className="w-fit h-fit p-0 flex items-center"
            >
              <Luggage color={"var(--primary)"} className="sm:hidden" />
              <span className="hidden sm:block text-sm md:text-xl  ">Mala Virtual</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
