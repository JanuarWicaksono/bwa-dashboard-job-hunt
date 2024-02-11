import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data)

    const result = await prisma.job.create({
        data,
    })

    return NextResponse.json(result)
}