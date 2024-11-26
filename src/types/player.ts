export interface IPlayer {
    age: number
    id: number
    name: string
    number: number
    photo: string
    position: string
    team?: {
        name: string
        code: string
        logo: string
    }
}