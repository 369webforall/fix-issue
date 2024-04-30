import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import IssueBadge from '@/app/components/IssueBadge'
import { Flex, Heading, Card, Box, Text, Button, Grid } from '@radix-ui/themes'
import Markdown from 'react-markdown'
import Link from 'next/link'
const IssueDetails = async({params}:{params:{id:string}}) => {
    let issue = await prisma.issue.findUnique({
        where:{
            id:params.id
        }
    })
    if(!issue) notFound();
  return (
    <Grid columns={{initial:'1', sm:'2'}} gap="5" justify="center" align="center">
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
    <Box>
<Button><Link href={`/issues/view/${issue.id}/edit`}>Update Issue</Link></Button>
    </Box>
    </Grid>
  )
}

export default IssueDetails