import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {

    const task = await prisma.tasks.findUnique({
        where: {
            id: Number(params.id)
        },
    });
    return NextResponse.json(task)
}

export async function PUT(request, {params}) {

    const data = await request.json();

    const taskUpdate = await prisma.tasks.update({
        where: {
            id: Number(params.id)
        },
        data: data,
    });
    return NextResponse.json(taskUpdate)
}

export async function DELETE(request, {params}) {

    try {
        const taskRemoved = await prisma.tasks.delete({
            where: {
                id: Number(params.id)
            },
        });
        return NextResponse.json(taskRemoved)
    } catch (error) {
        return NextResponse.json(error.message)
    }

    
}