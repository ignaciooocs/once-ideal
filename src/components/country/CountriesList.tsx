'use client'

import { useQuery } from "@tanstack/react-query"
import Country from "./Country"

export default function CountriesList() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['countries'],
        queryFn: async () => {
            const response = await fetch('/api/countries')
            return await response.json()
        }
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Something went wrong</div>

    console.log(data)

    return (
        <section className="flex flex-col items-end p-3">
            <ul className="flex flex-col w-full gap-2">
                <h2>lista de paises</h2>
                {data.countries.map((country: { name: string, code: string, flag: string }) => (
                    <Country key={country.name} country={country} />
                ))}
            </ul>
        </section>
    );
}