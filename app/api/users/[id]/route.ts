import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function PATCH(request:NextRequest, {params}:{params:{id:string}}){
const body = await request.json();
if(!body){
    return NextResponse.json({error:'No data created'}, {status:400})
}

const user = await prisma.user.findUnique({where:{id:Number(params.id)}})
if(!user){
    return NextResponse.json({error:'No user found'}, {status:401})
}

const updatedUser = await prisma.user.update({
   where:{id:user.id},
   data:{
    name:body.name,
    email:body.email
   } 
})

return NextResponse.json(updatedUser, {status:201})
}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}) {
    const user = await prisma.user.findUnique({where:{id:Number(params.id)}})
    if(!user){
        return NextResponse.json({error:'No user found'}, {status:401})
    } 

    await prisma.user.delete({
        where:{
            id:user.id
        }
    })
    
    return NextResponse.json({message:"user is deleted"}, {status:200})
}