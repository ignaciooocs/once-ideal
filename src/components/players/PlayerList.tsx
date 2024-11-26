import { useQuery } from "@tanstack/react-query"
import Player from "./Player"
import Image from "next/image"
import { getPlayersByTeam } from "@/services/fetching"
import { usePlayerStore } from "@/store/usePlayerStore"

export default function PlayerList({ id }: { id: string | string[] }) {

    const { addPlayers } = usePlayerStore()
    const { data, isLoading, error } = useQuery({
        queryKey: [id],
        queryFn: () => getPlayersByTeam({ id }),
    })

    if (isLoading) return <div>Loading jugadores...</div>
    if (error) return <div>Error al obtener jugadores</div>

    console.log(data)

    function addTeamToLocalStorage() {
        const players = localStorage.getItem('players')

        if (players) {
            const parsedPlayers = JSON.parse(players)
            data.response[0].players.map((player: any) => parsedPlayers.push({...player, team: data.response[0].team}))
            // parsedPlayers.push(data.response[0].players)
            addPlayers(parsedPlayers)
            console.log(parsedPlayers)
            localStorage.setItem('players', JSON.stringify(parsedPlayers))
            return
        }

        const newPlayers = data.response[0].players.map((player: any) => ({...player, team: data.response[0].team}))
        console.log(newPlayers)
        addPlayers(newPlayers)
        localStorage.setItem('players', JSON.stringify(newPlayers))
        // localStorage.setItem('players', JSON.stringify(data.response[0].players))
    }

    return (
        <section>
            <section>
                <h2>Selección de {data.response[0].team.name}</h2>
                <figure className="w-16 h-8">
                    <Image src={data.response[0].team.logo} alt={data.response[0].team.name} width={100} height={30} />
                </figure>
            <button onClick={addTeamToLocalStorage}>Añadir equipo 11 ideal</button>

            </section>
            <ul>
                {data.response[0].players.map((player: any) => (
                    <Player key={player.id} player={player} team={data.response[0].team} />
                ))}
            </ul>
        </section>
    )
}
