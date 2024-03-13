<template>
  <!-- myEvent will format to kebab-case to use it as @my-event="displayText += $event" -->
  <!-- where $event is `sentence` -->
  <button @click="$emit('myEvent', sentence)">{{ label }}</button>
</template>

<script>
export default {
  name: 'BtnText',
  data() {
    return {
      sentence: 'The quick brown fox jumps over the lazy dog'
    }
  },
  props: ['label'],
}
</script>