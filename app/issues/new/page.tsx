'use client'
import React from 'react'
import { Button,  TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className='max-w-lg space-y-4 mt-5'>
      <TextField.Root placeholder='Title...' />
      <SimpleMDE placeholder="Reply to comment…" />
     <Button>Submit Issue</Button>
    </div>
  )
}

export default NewIssue