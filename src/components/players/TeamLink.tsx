'use client'
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { getTeamByName } from "@/services/fetching"

export default function TeamLink({ team }: { team: string }) {

    const { data, isLoading, error } = useQuery({
        queryKey: [team],
        queryFn: () => getTeamByName({ team }),
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error al obtener equipos</div>

    console.log(data)
    return (
        <section className="p-4">
            <Link className="text-blue-500 underline" href={'/teams/' + data.response[0].team.id}>ver equipo completo</Link>
        </section>
    )
}