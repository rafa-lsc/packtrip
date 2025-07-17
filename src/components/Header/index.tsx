import { girassol, poppins } from "@/app/layout";
import { Plane, Luggage } from "lucide-react";
export default function Header() {
  return (
    <div className="container mx-auto h-fit">
      <div className="text-primary  flex justify-between px-2">
        <h1 className={`${girassol.className} text-3xl`}>PackTrip</h1>
        <ul
          className={`flex flex-row w-1/2 justify-end gap-5 text-sm ${poppins.className}`}
        >
          <li className="hover:bg-secondary flex justify-center items-center w-fit px-2 py-0 rounded-3xl transition-colors ease-in">
            <a href="/viagens" className="w-fit h-fit p-0 flex items-center ">
              
              <Plane color={"var(--primary)"} className="sm:hidden" />
              <span className="hidden sm:block text-xs md:text-sm ">Minhas viagens</span>
            </a>
          </li>
          <li className="hover:bg-secondary flex justify-center items-center w-fit px-2 py-0 rounded-3xl transition-colors ease-in">
            <a
              href="/mala-virtual"
              className="w-fit h-fit p-0 flex items-center"
            >
              <Luggage color={"var(--primary)"} className="sm:hidden" />
              <span className="hidden sm:block text-xs md:text-sm     ">Mala Virtual</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
