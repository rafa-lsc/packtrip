import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex items-center justify-center py-2 text-gray-500">
      <p className="flex flex-col sm:flex-row items-center gap-2">
        <span>Desenvolvido por </span>
        <a
          className="hover:underline"
          href="https://www.linkedin.com/company/byronsolutions"
        >
          <Image
          src={"logo_byron.svg"}
          alt="Logo azul da byron.solutions"
          width={187}
          height={21}
          />
        </a>
      </p>
    </div>
  );
}
