import React from 'react'
import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes';
import IssueBadge from '@/app/components/IssueBadge';
import delay from 'delay';
import Link from 'next/link';
const IssuePage = async() => {
  await delay(2000)
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <Table.Root variant='surface'>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell className='hidden md:table-cell'>CreatedAt</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {issues.map((issue)=>(
 <Table.Row key={issue.id}>
 <Table.Cell>
  <Link href={`/issues/view/${issue.id}`} className='hover:text-purple-600'>{issue.title}</Link>
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