'use client'
import PlayerList from "@/components/players/PlayerList"
import { useParams } from "next/navigation"

export default function Team() {
    const { id } = useParams()

    return (
        <section>
            <PlayerList id={id} />
        </section>
    )
}