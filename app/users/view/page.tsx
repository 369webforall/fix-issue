import React from 'react'
import { Button, Avatar, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';

const UsersPage = async () => {
    const users = await prisma.user.findMany();
    if(!users) notFound()
  return (
    <div className='mx-4 my-5'>
<Button asChild size="3" mt="5" mb="5"><Link href='/users/new'>Add New User</Link></Button>

<div className='my-4'>
<Flex align="center" gap="4">
  <Avatar
    size="1"
    radius='full'
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="2"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="3"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="4"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="5"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="6"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="7"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
  <Avatar
    size="8"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
  />
</Flex>

</div>
        {
            users.map((user)=>(
                <ul key={user.id} className='flex gap-4 border-b max-w-lg'>
                <li key={user.id} className='bg-purple-300 p-2'>{user.name}</li>
                <li>{user.email}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default UsersPage