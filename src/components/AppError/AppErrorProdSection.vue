<script setup lang="ts">
const props = defineProps<{
  message: string
  customCode: number
  details: string
  hint: string | null
  code: string
  statusCode: number
  isCustomError: boolean
}>()

const error = ref({
  code: 500,
  msg: 'An error occurred',
})

if (props.isCustomError) {
  error.value.code = props.customCode
  error.value.msg = props.message
}
</script>

<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
    <h1 class="error__code">{{ error.code }}</h1>
    <p class="error__msg">{{ error.msg }}</p>
    <div class="error-footer">
      <p class="error-footer__text">You'll find lots to explore on the home page.</p>
      <RouterLink to="/">
        <Button class="max-w-36"> Back to homepage</Button>
      </RouterLink>
    </div>
  </div>
</template>
