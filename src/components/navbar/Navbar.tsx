'use client';

import Link from "next/link";
import { IoCreateOutline, IoFootball } from "react-icons/io5";

export default function Navbar() {
    return (
        <nav className="flex flex-col h-16 bg-black w-full text-white absolute z-[1000]">
            <section className="flex gap-2 p-4 justify-between items-center">
                <Link className="flex gap-2 items-center" href="/">
                    <IoFootball size={30} />
                    <h1>Once Ideal</h1>
                </Link>
                <ul className="flex gap-4">
                    <Link className="flex gap-2 items-center" href="/create-once">
                        <span>Mi 11 ideal</span>
                        <IoCreateOutline size={30} />
                    </Link>
                </ul>
            </section>
            {/* <section className="flex gap-4 justify-center p-2">
                <ul className="flex gap-4">
                    <Link href="/leagues">Ligas</Link>
                    <Link href="/teams">Equipos</Link>
                    <Link href="/players">Jugadores</Link>
                </ul>
            </section> */}
        </nav>
    )
}