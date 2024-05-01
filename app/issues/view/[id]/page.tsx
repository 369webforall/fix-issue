import prisma from '@/prisma/client'
import { Box, Grid, Flex } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import EditIssueButton from '../_components/EditIssueButton'
import DeleteIssueButton from '../_components/DeleteIssueButton'
import IssueDetails from '../_components/IssueDetails'
const IssueDetailsPage = async({params}:{params:{id:string}}) => {
    let issue = await prisma.issue.findUnique({
        where:{
            id:params.id
        }
    })
    if(!issue) notFound();
  return (
    <Grid columns={{initial:'1', sm:'5'}} gap="5" justify="center" align="center">
    <Box as='div' className='space-y-4 md:col-span-4' >
        <IssueDetails issue={issue} />
    </Box>
    <Box>
        <Flex direction="column" gap="4">
<EditIssueButton IssueId={issue.id} />
<DeleteIssueButton IssueId={issue.id} />
</Flex>
    </Box>
    </Grid>
  )
}

export default IssueDetailsPage