
import LargeButton from "@/components/LargeButton";
import { montserrat } from "@/lib/fonts";
export default function Home() {
  return (
    <div className="flex-1 w-full flex  justify-center">
  <div className="flex-1 bg-[linear-gradient(rgba(12,112,182,0.5),rgba(12,112,182,0.5)),url('/fundo-aviao.jpg')] bg-cover bg-center text-white text-3xl flex flex-col justify-center items-center w-full sm:max-w-8/10 sm:my-5 sm:rounded-2xl">
    <p className={`${montserrat.className} p-2 text-center max-w-2xl`}>
      Viajar é viver histórias! Nós te ajudamos a organizar cada capítulo, da mala ao destino
    </p>
    <LargeButton text="Planejar Viagem" route="/viagens" />
  </div>
</div>

  );
}

