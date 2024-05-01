import React from 'react'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
const DeleteIssueButton = ({IssueId}:{IssueId:string}) => {
  return (
    
  <AlertDialog.Root>
  <AlertDialog.Trigger>
  <Button color='red'>Delete Issue</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Are your sure ?</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Once you delete, you canot reverse the action.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red">
          Continue with deletion
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
  )
}

export default DeleteIssueButton