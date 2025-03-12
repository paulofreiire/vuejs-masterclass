<script setup lang="ts">
import type { CreateNewTask } from '@/types/CreateNewForm.ts'

const sheetOpen = defineModel<boolean>()

const createTask = async (formData: CreateNewTask) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(formData)
    }, 1000)
  })
}
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create new task</SheetTitle>
      </SheetHeader>
      <FormKit type="form" @submit="createTask" submit-label="Create task">
        <FormKit type="text" name="name" id="Name" placeholder="My new task" />
      </FormKit>
    </SheetContent>
  </Sheet>
</template>
