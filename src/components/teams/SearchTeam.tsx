import { getTeamBySearch } from "@/services/fetching";
import { useEffect, useState } from "react";
import { Team } from "./Team";
import { IoSearchOutline } from "react-icons/io5";

export function SearchTeam() {
    const [search, setSearch] = useState("");
    const [teams, setTeams] = useState<false | any[]>(false);
    const [recentSearches, setRecentSearches] = useState<any>([]);

    async function searchTeam(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            if (search.length < 3) alert('por favor ingrese al menos 3 caracteres');
            
            const response = await getTeamBySearch({ name: search });
            console.log(response)

            setTeams(response.response);

            const updatedSearches = [search, ...recentSearches.filter((item: any) => item !== search)];
            if (updatedSearches.length > 5) {
                updatedSearches.pop(); // Limita las búsquedas recientes a las 5 más recientes
            }
            localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
            setRecentSearches(updatedSearches);
            setSearch('');
        } catch (error) {
            console.log('error search team ', error)
        }
    }

    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem('recentSearches') as string) || [];
        setRecentSearches(storedSearches);
      }, []);

    return (
        <section className="flex flex-col gap-2 w-4/5 p-2">
            <p className="font-sans font-semibold">Buscar equipo</p>
            <form onSubmit={searchTeam} className="flex gap-2 mb-2">
                <input
                    type="text"
                    placeholder="ejemplo: Real Madrid"
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border-2 border-gray-300 p-2 rounded-md bg-transparent focus:outline-blue-500"
                />
                <button 
                    className="border-none bg-blue-500 text-white p-2 rounded-md" 
                    type="submit"
                >
                    <IoSearchOutline />
                </button>
            </form>
            <section>
                <ul className="flex flex-col gap-2 p-2 h-96 overflow-auto">
                    {teams && search !== "" && <p className="font-sans font-semibold underline">Resultados de "{search}"</p>}
                    {teams && teams.map((team: any) => (
                        <Team key={team.team.id} team={team} /> 
                    ))}
                    {!teams && recentSearches.map((search: any, index: number) => (
                        <li key={index}>{search}</li>
                    ))}
                </ul>
            </section>
        </section>
    );
}