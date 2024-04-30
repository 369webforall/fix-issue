import prisma from '@/prisma/client'
import { Box, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import EditIssueButton from '../_components/EditIssueButton'
import IssueDetails from '../_components/IssueDetails'
const IssueDetailsPage = async({params}:{params:{id:string}}) => {
    let issue = await prisma.issue.findUnique({
        where:{
            id:params.id
        }
    })
    if(!issue) notFound();
  return (
    <Grid columns={{initial:'1', sm:'2'}} gap="5" justify="center" align="center">
    <Box as='div' className='space-y-4'>
        <IssueDetails issue={issue} />
    </Box>
    <Box>
<EditIssueButton IssueId={issue.id} />
    </Box>
    </Grid>
  )
}

export default IssueDetailsPage