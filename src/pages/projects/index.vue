<script setup lang="ts">
import { supabase } from '@/lib/supbaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types.ts'

const projects = ref<Tables<'projects'>[] | null>([])
;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.log(error)

  projects.value = data
  console.log('projects :', projects.value)
})()
</script>

<template>
  <h1>Projects Page</h1>
  <RouterLink to="/"></RouterLink>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <RouterLink :to="`/projects/${project.id}`">{{ project.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
