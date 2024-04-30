import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import IssueBadge from '@/app/components/IssueBadge'
import { Flex, Heading, Card, Box, Text } from '@radix-ui/themes'
import Markdown from 'react-markdown'
const IssueDetail = async({params}:{params:{id:string}}) => {
    let issue = await prisma.issue.findUnique({
        where:{
            id:params.id
        }
    })
    if(!issue) notFound();
  return (
    <Box as='div' className='space-y-4'>
        <Heading as='h1'>{issue.title}</Heading>
        <Flex className='space-x-4' mt="4">
        <IssueBadge status={issue.status}/>
        <Text as='p'>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className='prose'>
        <Markdown>{issue.description}</Markdown>
        </Card>
        
    </Box>
  )
}

export default IssueDetail