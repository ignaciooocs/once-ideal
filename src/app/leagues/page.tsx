'use client'
import { useQuery } from "@tanstack/react-query"

export default function Leagues() {

    // const topLeagues = [
    //     ''
    // ]

    // const { data, isLoading, error } = useQuery({
    //     queryKey: ['leagues'],
    //     queryFn: async () => {
    //         const response = await fetch('https://v3.football.api-sports.io/leagues?code=cl', {
    //             method: 'GET',
    //             headers: {
    //                 'x-apisports-key': 'a19ef8c2928884103a208798de77a821'
    //             }
    //         })
    //         return await response.json()
    //     }
    // })

    // if (isLoading) return <div>Loading...</div>
    // if (error) return <div>Something went wrong</div>

    // console.log(data)
    return (
        <section>leagues</section>
    )
}