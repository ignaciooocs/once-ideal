import { searchPlayerByName } from "@/services/fetching";
import { useState } from "react";
import Player from "./Player";
import { IoSearchOutline } from "react-icons/io5";

export function SearchPlayers({ teamId }: { teamId: string }) {
    const [search, setSearch] = useState('');
    const [players, setPlayers] = useState<false | any[]>(false);

    async function searchPlayer(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!search.trim()) return alert('por favor ingrese el nombre del jugador');
        try {
            const response = await searchPlayerByName({ name: search, teamId });

            setPlayers(response.response);
            console.log(response)
        } catch (error) {
            console.log('error search player ', error)
        }
    }
    return (
        <section className="p-4">
            <h2>Buscar jugador</h2>
            <form onSubmit={searchPlayer} className="flex gap-2 w-full">
                <input
                    type="text"
                    placeholder="Ejemplo: Cristiano Ronaldo"
                    className="w-full border-2 border-gray-300 p-2 rounded-md bg-transparent"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="border-none bg-blue-500 text-white p-2 rounded-md">
                    <IoSearchOutline />
                </button>
            </form>
            <ul className="my-2">
                {players && 
                    players.map((player: any) => (
                        <Player key={player.id} player={player.player} team={player.statistics[0].team} />
                    ))
                }
            </ul>
        </section>
    );
}