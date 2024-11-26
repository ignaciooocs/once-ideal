import { IPlayer } from "@/types/player";
import { usePlayerStore } from "@/store/usePlayerStore";

export function addOnePlayerLS(player: IPlayer) {
    
    const { addOnePlayer, addPlayers } = usePlayerStore.getState()

    const players = localStorage.getItem('players')

    if (players) {
        const parsedPlayers = JSON.parse(players)
        parsedPlayers.push(player)
        addOnePlayer(player)
        localStorage.setItem('players', JSON.stringify(parsedPlayers))
        return
    }

    localStorage.setItem('players', JSON.stringify([player]))
    addPlayers([player])
}

export function removePlayerLS(id: string) {
    const { addPlayers } = usePlayerStore.getState()

    const players = localStorage.getItem('players')
    if (players) {
        const parsedPlayers = JSON.parse(players)
        const newPlayers = parsedPlayers.filter((player: IPlayer) => player.id.toString() !== id)
        localStorage.setItem('players', JSON.stringify(newPlayers))
        addPlayers(newPlayers)
        return
    }
}