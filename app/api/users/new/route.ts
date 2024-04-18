import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request:NextRequest){
const body = await request.json();
if(!body){
    return NextResponse.json({error:'No data created'}, {status:400})
}

 const user = await prisma.user.create({
    data:{
        name:body.name,
        email:body.email,
        password:body.password
    }
 })

 return NextResponse.json(user, {status:201})

}

