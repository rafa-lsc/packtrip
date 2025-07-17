import Link from "next/link";
import { ReactNode } from "react";
import { poppins } from "@/app/layout";

interface LargeButtonProps {
  text: string;
  route?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function LargeButton({ text, route, onClick, icon }: LargeButtonProps) {
  const ButtonContent = (
    <button
      onClick={onClick}
      className={` ${poppins.className} bg-primary text-white px-6 py-3 rounded-xl text-lg font-semibold flex items-center gap-2 hover:opacity-90 transition`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{text}</span>
    </button>
  );

  if (route) {
    return <Link href={route}>{ButtonContent}</Link>;
  }

  return ButtonContent;
}
