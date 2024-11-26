import Image from "next/image"
import { IPlayer } from "@/types/player"
import { addOnePlayerLS } from "@/utils/localStorage"
import { usePlayerStore } from "@/store/usePlayerStore"
import { IoAddCircleOutline } from "react-icons/io5"

export default function Player({ player, team }: { player: IPlayer, team: any }) {

    const { players, setCount } = usePlayerStore()

    function add () {
        if (players.some((p: IPlayer) => p.id === player.id)) return alert('ya agregaste este jugador')
        addOnePlayerLS({...player, team})
        setCount()
    }

    return (
        <li className="flex justify-between gap-2 border-2 border-gray-300">
            <section className="flex gap-2">
                <figure className="w-16 h-16">
                    <Image priority src={player.photo} alt={player.name} width={50} height={50} />
                </figure>
                <section className="flex flex-col p-1">
                    <b>{player.name}</b>
                    {/* <p>{player.position}</p> */}
                    <p>{player.age}</p>
                </section>
            </section>
                <IoAddCircleOutline 
                    color="#27ab67" 
                    size={20} 
                    onClick={add} 
                    className="hover:scale-105 transition-all"
                />
        </li>
    )
}
