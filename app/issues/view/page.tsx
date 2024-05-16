import prisma from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import {IssueBadge, Link, ActionButton} from "../../components"
import { Status, Issue } from '@prisma/client';
import NextLink from 'next/link';
import { ArrowUp } from 'lucide-react';

const IssuePage = async({searchParams}:{searchParams:{status:Status, orderBy:string}}) => {
  
  const statuses = Object.values(Status) 

  const status = statuses.includes(searchParams.status) ? searchParams.status :undefined;

  const columns:{label:string; 
    value: keyof Issue;
  className?:string;
   }[] = [
    {label:'Title', value:'title'},
    {label:'Status', value:'status', className:'hidden md:table-cell'},
    {label:'CreatedAt', value:'createdAt', className:'hidden md:table-cell'}]

  const issues = await prisma.issue.findMany({
    where:{
      status: status
    },
    orderBy:{
      [searchParams.orderBy]:'asc'
    }
  });

  return (
    <div className='space-y-4 mt-4'>
      <ActionButton />
      <Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
    {columns.map((column)=>(
        <Table.ColumnHeaderCell key={column.value} className={column.className}><NextLink href={{query:{...searchParams, orderBy:column.value}}}>{column.label}</NextLink>
        {column.value === searchParams.orderBy && <ArrowUp className='inline'/>}
        </Table.ColumnHeaderCell>
      ))}
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {issues.map((issue)=>(
 <Table.Row key={issue.id}>
 <Table.Cell>
  <Link href={`/issues/view/${issue.id}`}>{issue.title}</Link>
  <div className='block md:hidden'>
      <IssueBadge status={issue.status} />
  </div>
  </Table.Cell>
 <Table.Cell className='hidden md:table-cell'><IssueBadge status={issue.status} /></Table.Cell>
 <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
</Table.Row>
    ))}
  </Table.Body>
  </Table.Root>
    </div>
  )
}

export default IssuePage