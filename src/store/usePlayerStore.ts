import { create } from 'zustand'

interface Store {
    players: any[]
    addPlayers: (player: any) => void
    removeAllPlayers: () => void
    addOnePlayer: (player: any) => void
    removeOnePlayer: (id: string) => void
    count: number
    setCount: () => void
    resetCount: () => void
}

export const usePlayerStore = create<Store>((set) => ({
    players: [],
    addPlayers: (player: any) => set((state: any) => state.players = player),
    addOnePlayer: (player: any) => set((state: any) => ({ players: [...state.players, player] })),
    removeOnePlayer: (id: string) => set((state: any) => ({ players: state.players.filter((player: any) => player.id !== id) })),
    removeAllPlayers: () => set(() => ({ players: [] })),

    count: 0,
    setCount: () => set((state: any) => ({ count: state.count + 1 })),
    resetCount: () => set((state: any) => ({ count: 0 })),
}))