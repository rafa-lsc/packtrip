import Link from "next/link";
 interface LargeButtonProps{
    route: string
    text: string
 }

export default function LargeButton({route, text}: LargeButtonProps){
    return(
        <Link href={route}>
        <button>{text}</button>
        </Link>
    )
}