import connectionDB from '@/libs/database'
import { NextResponse } from 'next/server'

const paises = [
    'Chile', 
    'Brazil',
    'Portugal',
    'Netherlands',
    'Argentina', 
    'France', 
    'Germany',
    'England',
    'Spain' 
]

export async function GET(request: Request) {
    try {
        const connection = await connectionDB()
        const countries = await connection?.connection
            .collection('countries')
            .find({ name: { $in: paises } })
            .toArray()

        return NextResponse.json({ 
            success: true,
            message: 'Countries fetched successfully',
            countries
        })  
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong',
            error,
            countries: []
        })
    }
}