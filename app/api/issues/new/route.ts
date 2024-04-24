import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {z} from 'zod';

// http://localhost:3000/api/issues/new

const IssueFormSchema = z.object({
    title:z.string().min(1, {message:"Title is required"}).max(50),
    description:z.string().min(6, {message:"Description is required"}).max(2000)
}) 


export async function POST(request:NextRequest){
const body = await request.json();
const validation = IssueFormSchema.safeParse(body)

if(!validation.success){
    return NextResponse.json(validation.error.format(), {status:400})
}

const issue = await prisma.issue.create({
    data:{
        title:body.title,
        description:body.description,
    }
})
return NextResponse.json(issue, {status:201})
}