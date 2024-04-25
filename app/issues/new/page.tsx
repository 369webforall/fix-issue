'use client'
import React, {useState} from 'react'
import { Button, TextField, Callout, Text } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { IssueFormSchema } from '@/app/ValidationSchema';
// interface IssueFormData {
//   title:string,
//   description:string,
// }

type IssueFormData =z.infer<typeof IssueFormSchema>

const NewIssue = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState:{errors}} = useForm<IssueFormData>({
    resolver:zodResolver(IssueFormSchema)});
const[error, setError]=useState("")

  const onSubmit = handleSubmit(async(data)=>{
    try {
      await axios.post('/api/issues/new', data);
      router.push('/issues/view')
    } catch (error) {
      setError("Unable to create issue, try again");
    }
})

  return (
<div className='max-w-lg space-y-4 mt-5'>
  {error && <Callout.Root color='orange'>
    <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
    <form className='max-w-lg space-y-4 mt-5' onSubmit={onSubmit}>
      <TextField.Root placeholder='Title...' {...register('title')}></TextField.Root>
      {errors.title?.message && <Text as='p' color='red' my="4">{errors.title.message}</Text>  }
      <Controller 
      name="description" 
      control={control} 
      render={({field})=><SimpleMDE placeholder="Reply to comment…"  {...field}/>} />
       {errors.description?.message && <Text as='p' color='red' my="4">{errors.description.message}</Text>  }
     <Button type='submit'>Submit Issue</Button>
    </form>
    </div>
  )
}

export default NewIssue