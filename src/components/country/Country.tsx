import Image from "next/image";
import { useState } from "react";
import TeamLink from "../players/TeamLink";

export default function Country({ country }: { country: { name: string, code: string, flag: string }}) {
    const [open, setOpen] = useState(false)
    const [view, setView] = useState(false)

    return (
        <li className="flex flex-col border-2 border-gray-300 p-2 cursor-pointer">
            <section onClick={() => setOpen(!open)}  className="flex gap-2 items-center justify-between">
                <p>{country.name}</p>
                {country.flag && 
                <figure className="w-10 h-4">
                    <Image priority src={country.flag} alt={country.name} width={30} height={10} />
                </figure>
                }

            </section>
            {open &&
                <section>
                    <p onClick={() => setView(!view)}>Selección de {country.name}</p>
                    <TeamLink team={country.name} />
                </section>
            }
        </li>
    )
}