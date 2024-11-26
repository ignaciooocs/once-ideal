export async function getTeamByName ({ team }: { team: string }) {
    const response = await fetch(`https://v3.football.api-sports.io/teams?name=${team}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY_SPORT!
        }
    })
    return await response.json()
}

export async function getPlayersByTeam ({ id }: { id: string | string[] }) {
    const response = await fetch(`https://v3.football.api-sports.io/players/squads?team=${id}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY_SPORT!
        }
    })
    return await response.json()
}

export async function getPlayerById ({ id }: { id: string | string[] }) {
    const response = await fetch(`https://v3.football.api-sports.io/players?id=${id}&season=2024`, {
        method: 'GET',
        headers: {
            'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY_SPORT!
        }
    })
    return await response.json()
}

export async function getTeamBySearch ({ name }: { name: string }) {
    const response = await fetch(`https://v3.football.api-sports.io/teams?search=${name}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY_SPORT!
        }
    })
    return await response.json()
}

export async function searchPlayerByName ({ name, teamId }: { name: string, teamId: string }) {
    const response = await fetch(`https://v3.football.api-sports.io/players?team=${teamId}&search=${name}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': process.env.NEXT_PUBLIC_API_KEY_SPORT!
        }
    })
    return await response.json()
}