<script setup lang="ts">
import { supabase } from '@/lib/supbaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types.ts'

const tasks = ref<Tables<'projects'>[] | null>([])
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.log(error)

  tasks.value = data
})()
</script>

<template>
  <h1>Projects Page</h1>
  <RouterLink to="/"></RouterLink>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <RouterLink :to="`/tasks/${task.id}`">{{ task.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
^
