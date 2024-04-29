import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

const IssueDetail = async ({params}:{
    params:{id:string}
}) => {
    const issue = await prisma.issue.findUnique({where:{id:params.id}})
    if(!issue) notFound();

  return (
    <div>
        <p>{issue.title}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
        <p>{issue.description}</p>
    </div>
  )
}

export default IssueDetail