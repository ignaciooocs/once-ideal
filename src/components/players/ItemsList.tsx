import { IPlayer } from "@/types/player";
import Item from "./Item";
import { IoTrashOutline } from "react-icons/io5";
import { usePlayerStore } from "@/store/usePlayerStore";

export default function ItemsList({ addNode }: { addNode: (player: IPlayer) => void }) {

    const { removeAllPlayers, players } = usePlayerStore();

    function removeAlls() {
        localStorage.removeItem('players');
        removeAllPlayers();
    }
    return (
        <section className="flex flex-col w-4/5 bg-gray-200 items-center">
            <section className="flex justify-between p-2 w-full bg-gradient-to-bl from-gray-200 to-gray-300">
                <p className="font-sans font-semibold text-sm">Mis jugadores</p>
                <button title="Eliminar todos los jugadores de la lista" onClick={removeAlls} className="hover:scale-105 transition-all"><IoTrashOutline color="red" /></button>
            </section>
            <ul className="flex flex-col w-full h-full gap-y-2 p-2 overflow-y-auto overflow-x-hidden">
                {players &&
                    players.map((player: IPlayer) => (
                        <Item key={player.id} player={player} addNode={addNode} />
                    ))
                }
                {players.length === 0 && <p className="font-semibold text-xs text-center">No hay jugadores</p>}
            </ul>
        </section>
    )
}