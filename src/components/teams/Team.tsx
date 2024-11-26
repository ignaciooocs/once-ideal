import Image from "next/image"
import { useState } from "react"
import TeamLink from "../players/TeamLink"
import { SearchPlayers } from "../players/SearchPlayers"
import PlayerList from "../players/PlayerList"

export function Team ({ team }: any) {
    const [open, setOpen] = useState(false)
    const [view, setView] = useState(false)
    
    return (
        <li key={team.team.id} className="flex flex-col cursor-pointer">
            <section onClick={() => setOpen(!open)} className="flex gap-2 p-2 border border-gray-300">
                <figure className="w-10 h-6">
                    <Image src={team.team.logo} alt={team.team.name} width={20} height={10} className="object-contain" />
                </figure>
                <h2>{team.team.name}</h2>
            </section>
            {open &&
                <section className="border border-gray-300">
                    <SearchPlayers teamId={team.team.id} />
                    <button onClick={() => setView(!view)}>Ver jugadores</button>
                    {view && <PlayerList id={team.team.id} />}
                </section>
            }
        </li>
    )
}