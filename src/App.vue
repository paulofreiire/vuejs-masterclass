<script setup lang="ts">
import { supabase } from '@/lib/supbaseClient.ts'

const errorStore = useErrorStore()
onErrorCaptured((error) => {
  errorStore.setError({ error })
})

onMounted(async () => {
  useAuthStore().trackAuthStore()
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />
    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />

        <template #fallback>
          <span> Loading... </span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
