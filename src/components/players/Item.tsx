import Image from "next/image"
import { IPlayer } from "@/types/player"
import { removePlayerLS } from "@/utils/localStorage"
import { IoClose } from "react-icons/io5"

interface IProps {
    player: IPlayer
    addNode: (player: IPlayer) => void
}

export default function Item({ player, addNode }: IProps) {

    const remove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        removePlayerLS(player.id.toString())
    }

    return (
        <li 
            title={`Agregar ${player.name} al campo`} 
            className="init-opacity flex justify-between w-full gap-2 border-2 border-gray-300 relative rounded-md cursor-pointer hover:scale-[1.01] transition-all" 
            onClick={() => addNode(player)}
        >
            <section className="flex">
                <figure className="w-16 h-16">
                    <Image priority src={player.photo} alt={player.name} width={50} height={50} />
                </figure>
                <section className="flex flex-col p-1">
                    <b>{player.name}</b>
                    <figure className="w-6 h-4">
                        <Image src={player.team?.logo!} alt={player.team?.name!} width={10} height={10} className="object-contain" />
                    </figure>
                </section>
            </section>
            <section className="flex items-end z-10">
                <button title={`Eliminar ${player.name} de la lista`} className="absolute top-0 right-0" onClick={remove} >
                    <IoClose color="red" />
                </button>
            </section>

        </li>
    )
}