'use client'
import React from 'react'
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface IssueFormData {
  title:string,
  description:string,
}

const NewIssue = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState:{errors}} = useForm<IssueFormData>();

  return (
    <form className='max-w-lg space-y-4 mt-5' onSubmit={handleSubmit(async(data)=>{
        await axios.post('/api/issues/new', data);
        router.push('/issues/view')
    })}>
      <TextField.Root placeholder='Title...' {...register('title')}>
     
      </TextField.Root>
      <Controller 
      name="description" 
      control={control} 
      render={({field})=><SimpleMDE placeholder="Reply to comment…"  {...field}/>} />
      
     <Button type='submit'>Submit Issue</Button>
    </form>
  )
}

export default NewIssue