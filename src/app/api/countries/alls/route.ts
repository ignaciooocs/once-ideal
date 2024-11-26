import connectionDB from "@/libs/database";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const connection = await connectionDB();
        const countries = await connection?.connection
            .collection("countries")
            .find({})
            .toArray()

        await connection?.connection.close();

        return NextResponse.json({
            success: true,
            message: "Countries fetched successfully",
            countries
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
            error,
            countries: []
        })
    }
}