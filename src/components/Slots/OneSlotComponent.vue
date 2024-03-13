<template>
  <div>
    <!-- slot is like children in react, but u can set multiple named slots in one component -->
    <p>Slot Default <slot>Default Text</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OneSlotComponent',
  data() {
    return {
      componentVar: 'Text passed up from component'
    }
  }
}
</script>